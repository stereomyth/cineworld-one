// turn into usefull data

let locations;
let films;
let weekly;

let cinemaByID = {};
let filmByID = {};

const convertLocations = cinemas => {
  return cinemas.reduce((acc, data) => {
    const cinema = {
      slug: data.url[0].replace('http://www1.cineworld.co.uk/cinemas/', ''),
      name: data.name[0].replace('Cineworld ', ''),
      postcode: data.postcode[0] || '',
    };

    cinemaByID[data.id] = cinema.slug;
    acc[cinema.slug] = cinema;

    return acc;
  }, {});
};

const convertFilms = films => {
  return films.reduce((acc, data) => {
    const film = {
      slug: data.url[0].replace('http://www1.cineworld.co.uk/films/', ''),
      title: data.title[0],
      runTime: data.runningTime[0],
      img: data.posterUrl[0],
      id: data.id[0],
    };

    filmByID[data.id[0]] = film.slug;
    acc[film.slug] = film;

    return acc;
  }, {});
};

const convertWeekly = screens => {
  return screens.reduce((acc, data) => {
    const cid = cinemaByID[data.cinema[0]];
    const film = filmByID[data.film[0]];

    const attr = data.attributes[0];
    let type = attr.includes('3D') ? '3D' : '2D';

    if (attr.includes('IMAX')) {
      type += '-IMAX';
    } else if (attr.includes('4DX')) {
      type += '-4DX';
    }

    acc[cid] = acc[cid] || { ...locations[cid], films: {} };
    acc[cid].films[film] = acc[cid].films[film] || {
      ...films[film],
      screens: {},
    };
    acc[cid].films[film].screens[type] =
      acc[cid].films[film].screens[type] || [];

    acc[cid].films[film].screens[type].push({
      date: data.date,
      attr: attr.split(','),
    });

    return acc;
  }, {});
};

module.exports = data => {
  return new Promise((resolve, reject) => {
    locations = convertLocations(data.feed.cinemas[0].cinema);
    films = convertFilms(data.feed.films[0].film);
    weekly = convertWeekly(data.feed.performances[0].screening);

    resolve({
      // locations,
      weekly: weekly['birmingham-broad-street'],
    });
  });
};
