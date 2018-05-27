const axios = require('axios');
const parse = require('./bits/parse.js');
const convert = require('./bits/convert.js');
const save = require('./bits/save.js');

exports.handler = function(event, context, callback) {
  const url = event.queryStringParameters.dev
    ? 'http://localhost:3000/weekly_film_times.xml'
    : 'https://www.cineworld.co.uk/syndication/weekly_film_times.xml';

  axios
    .get(url)
    .then(res => parse(res.data))
    .then(convert)
    .then(save)
    .then(data => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      });
    })
    .catch(err => {
      console.log(err);
      callback('nope');
    });
};
