import axios, { type AxiosRequestConfig } from "axios";

/**
 * Axios instance
 */
const instance = axios.create({
  baseURL: import.meta.env.VITE_AVAILX_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * Token
 */
export const authToken = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  if (user) {
    instance.defaults.headers.common["x-access-token"] = user.accessToken;
  } else {
    delete instance.defaults.headers.common["x-access-token"];
  }
};

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// export
export { instance as API };
