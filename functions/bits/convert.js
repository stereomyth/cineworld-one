module.exports = json => {
  return new Promise((resolve, reject) => {
    resolve(json.feed.cinemas[0].cinema);
  });
};
