import axios from "axios";

// === Add a request interceptor ===
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_token");
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accsess-Control-Allow-Origin"] = "*";

    return config;
  },
  (error) => Promise.reject(error)
);

// === Add a response interceptor ===
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // fix error there
    return Promise.reject(error);
  }
);
