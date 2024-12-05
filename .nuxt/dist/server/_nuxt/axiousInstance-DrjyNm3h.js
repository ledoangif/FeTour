import axios from "axios";
const port = {
  http: "https://localhost:44308/api",
  https: "https://localhost:44308"
};
const https = axios.create({
  baseURL: port.http,
  timeout: 1e4,
  headers: {
    // "Content-type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Authorization: `Bearer ${typeof localStorage !== "undefined" ? localStorage.getItem("token") : ""}`
  }
});
export {
  https as h
};
//# sourceMappingURL=axiousInstance-DrjyNm3h.js.map
