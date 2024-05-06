import axios from 'axios';

axios.get('/api/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });