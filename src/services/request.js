import axios from "axios";

const Request = {
  async get(url = "", params = {}) {
    const { data } = await axios.get(url, { params });
    return data;
  },
  async post(url = "", payload = {}, params = {}) {
    const { data } = await axios.post(url, payload, { params });
    return data;
  },
};

export default Request;
