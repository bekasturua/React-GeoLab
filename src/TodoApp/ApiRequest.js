import axios from "axios";

export default function ApiRequest(method, endpoint, data, headers = {}) {
  const defaultHeaders = {
    Authorization: "test",
  };

  return axios({
    url: `https://us-central1-js04-b4877.cloudfunctions.net/tasks/` + endpoint,
    method,
    data,
    headers: { ...defaultHeaders, ...headers },
  });
}