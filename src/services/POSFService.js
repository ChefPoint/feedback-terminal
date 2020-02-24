import http from "./httpService";

const apiEndpoint = "POSF";

function post(item) {
  return http.post(apiEndpoint + "/", item);
}

function put(id, item) {
  return http.put(apiEndpoint + "/" + id, item);
}

function get(route, params) {
  return http.get(
    apiEndpoint + "/" + route,
    params && {
      params: { params }
    }
  );
}

export default {
  post,
  put,
  get
};
