const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://temp-mail44.p.rapidapi.com/api/v3/email/new',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '48ab8ae0cbmsh541db2f2a4f43d7p1f5009jsnf85a9e96a4b6',
    'X-RapidAPI-Host': 'temp-mail44.p.rapidapi.com'
  },
  data: {
    key1: 'value',
    key2: 'value'
  }
};
const test = async () => {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
test();