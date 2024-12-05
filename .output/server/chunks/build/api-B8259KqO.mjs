import axios from 'axios';

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

class Api {
  async get(url, config) {
    try {
      const response = await https.get(url, config);
      if (response == null)
        return null;
      return response;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
  async deleteById(url, id) {
    try {
      const result = await https.delete(`${url}/${id}`);
      if (result == null)
        return null;
      return result;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
  async putAPI(url, data) {
    try {
      const response = await https.put(`${url}`, data);
      if (response == null)
        return null;
      return response;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
  async postAPI(url, data) {
    try {
      const response = await https.post(`${url}`, data);
      if (response == null)
        return null;
      return response;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
  async postLogOut(url) {
    try {
      const response = await https.post(`${url}`, {});
      if (response == null)
        return null;
      return response;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
}

export { Api as A };
//# sourceMappingURL=api-B8259KqO.mjs.map
