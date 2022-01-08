import axios from 'axios';

axios.defaults.baseURL = 'https://chefpoint-feedback-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3500/';

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log('An unexpected error occured.', error);
  }

  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
