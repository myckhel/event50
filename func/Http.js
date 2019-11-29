import axios from "axios";
import { API_URL, CSRF_TOKEN } from "../config";
import AsyncStorage from "@react-native-community/async-storage";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = CSRF_TOKEN;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response,
  (error) => {
    // if (error.response.status === 401) {
    //   store.dispatch(authLogout())
    // }
    if (error.response && (error.response.status === 500 || error.response.status === 405)) {
      console.log(error.response.data);
    }

    // return error
    return Promise.reject(error);
  }
);

export default axios
