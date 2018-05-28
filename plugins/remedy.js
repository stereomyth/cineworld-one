import axios from 'axios';

const firebase = 'https://firestore.googleapis.com/v1beta1/';

const remote = axios.create({
  baseURL: firebase + 'projects/splice-cw/databases/(default)/documents/',
  params: { pageSize: 200 },
});

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

export default (collection, doc = '') =>
  remote.get(`${collection}/${doc}`).then(res => convert(res.data));
