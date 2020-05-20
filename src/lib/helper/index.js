import Axios from "axios";
const endpoint = "http://localhost:5000/";

const headers = () => {
  const h = new Headers();
  h.append("Content-Type", "application/json");

  const session = {
    token: localStorage.getItem("access-token"),
  };
  if (session.token) {
    h.append("access-token", session.token);
  }
  return h;
};

const request = (body) => {
  const options = { headers: headers() };
  if (body) {
    options.body = JSON.stringify(body);
  }
  console.log(body);

  return options;
};

const api = {
  get(path) {
    const url = `${endpoint}${path}`;
    return Axios.get(url);
  },
  post(path, data) {
    const url = `${endpoint}${path}`;
    return Axios.post(url,request(data));
  },
  delete(path) {
    return request("DELETE", path);
  },
};

export default api;
