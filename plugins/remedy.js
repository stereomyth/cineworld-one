import axios from 'axios';

const convert = data => {
  return Object.keys(data).reduce((acc, key) => {
    if (key === 'fields' || key === 'mapValue' || key === 'arrayValue') {
      acc = convert(data[key]);
    } else if (key === 'values' || key === 'documents') {
      acc = data[key].map(convert);
    } else if (key === 'stringValue' || key === 'booleanValue') {
      acc = data[key];
    } else if (typeof data[key] === 'object') {
      acc[key] = convert(data[key]);
    }

    return acc;
  }, {});
};

const db = `https://firestore.googleapis.com/v1beta1/projects/splice-cw/databases/(default)/documents/`;

export default (collection, doc = '') =>
  axios
    .get(db + collection + '/' + doc, { params: { pageSize: 200 } })
    .then(res => convert(res.data));
