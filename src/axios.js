import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-9f632.cloudfunctions.net/api",
  // http://localhost:5001/clone-9f632/us-central1/api"
});

export default instance;
