import axios from 'axios';
import { Parser } from 'xml2js';

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/cinemas.xml'
    : 'https://www.cineworld.co.uk/syndication/cinemas.xml';

const p = new Parser({ mergeAttrs: true });

export default {
  get() {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        p.parseString(res.data, (err, data) => {
          resolve(
            data.cinemas.cinema.map(cinema => {
              return {
                slug: cinema.url[0].replace('cinemas/', ''),
                name: cinema.name[0].replace('Cineworld ', ''),
                postcode: cinema.postcode[0] || '',
                // phone
                // address
              };
            })
          );
        });
      });
    });
  },
};
