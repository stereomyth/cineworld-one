const axios = require('axios');
const parse = require('./bits/parse.js');
const convert = require('./bits/convert.js');
const save = require('./bits/save.js');

const url = 'http://localhost:3000/weekly_film_times.xml';

exports.handler = function(event, context, callback) {
  axios
    .get(url)
    .then(res => parse(res.data))
    .then(convert)
    .then(save)
    .then(data => {
      callback(null, {
        statusCode: 200,
        // body: 'ok',
        body: JSON.stringify(data),
      });
    })
    .catch(err => {
      console.log(err);
      callback(null, {
        statusCode: 500,
        body: 'nope',
      });
    });
};
