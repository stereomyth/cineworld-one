const Parser = require('xml2js').Parser;

const p = new Parser({ mergeAttrs: true });

module.exports = xml => {
  return new Promise((resolve, reject) => {
    p.parseString(xml, (err, json) => {
      if (err) {
        reject(err);
      }

      resolve(json);
    });
  });
};
