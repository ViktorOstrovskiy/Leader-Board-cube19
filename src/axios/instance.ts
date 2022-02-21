import axios from "axios";
const instance = axios.create({
  baseURL: "http://coding-test.cube19.io/frontend/v1/",
});

export default instance;
