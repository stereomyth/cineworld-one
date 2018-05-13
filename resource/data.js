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
    // screens: data.feed.performances.screening,
  };

  let filmByID = {};
  let cinemaByID = {};

  // build and save locations
  const locations = raw.cinemas.map(data => {
    const cinema = {
      slug: data.url[0].replace('http://www1.cineworld.co.uk/cinemas/', ''),
      name: data.name[0].replace('Cineworld ', ''),
      postcode: data.postcode[0] || '',
    };

    cinemaByID[data.id] = cinema.slug;

    return cinema;
  });

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

  return {
    locations,
    films,
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
