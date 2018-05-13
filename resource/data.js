import axios from 'axios';
import { Parser } from 'xml2js';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/weekly_film_times.xml'
    : 'https://www.cineworld.co.uk/syndication/weekly_film_times.xml';

const p = new Parser({ attrkey: 'xxx', mergeAttrs: true });

// make good
const convert = data => {
  const raw = {
    cinemas: data.feed.cinemas[0].cinema,
    films: data.feed.films[0].film,
    screens: data.feed.performances[0].screening,
  };

  let filmByID = {};
  let cinemaByID = {};

  // build and save locations
  const locations = raw.cinemas.reduce((acc, data) => {
    const cinema = {
      slug: data.url[0].replace('http://www1.cineworld.co.uk/cinemas/', ''),
      name: data.name[0].replace('Cineworld ', ''),
      postcode: data.postcode[0] || '',
    };

    cinemaByID[data.id] = cinema.slug;
    acc[cinema.slug] = cinema;

    return acc;
  }, {});

  const films = raw.films.map(data => {
    const film = {
      slug: data.url[0].replace('http://www1.cineworld.co.uk/films/', ''),
      title: data.title[0],
      runTime: data.runningTime[0],
      img: data.posterUrl[0],
      id: data.id[0],
    };

    filmByID[data.id[0]] = film.slug;

    return film;
  });

  const weekly = raw.screens.reduce((acc, data) => {
    const cid = cinemaByID[data.cinema[0]];
    const film = filmByID[data.film[0]];

    const attr = data.attributes[0];
    let type = attr.includes('3D') ? '3D' : '2D';

    if (attr.includes('IMAX')) {
      type += '-IMAX';
    } else if (attr.includes('4DX')) {
      type += '-4DX';
    }

    acc[cid] = acc[cid] || {};
    acc[cid][film] = acc[cid][film] || {};
    acc[cid][film][type] = acc[cid][film][type] || [];

    acc[cid][film][type].push({
      date: data.date,
      attr: attr.split(','),
    });

    return acc;
  }, {});

  // console.log(out['gloucester-quays']);

  return {
    locations,
    films,
    weekly,
  };
};

export default {
  get() {
    return new Promise((resolve, reject) => {
      // get xml file
      axios.get(url).then(res => {
        // convert to json
        p.parseString(res.data, (err, json) => {
          resolve(convert(json));
        });
      });
    });
  },
};
