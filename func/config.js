import { Platform } from 'react-native'
let api;
let img;
if (__DEV__) {
    // api = "http://localhost/webservice/";
    api = "http://127.0.0.1:8000/api/"
    api = Platform.OS === 'android'
    ? "http://192.168.43.65:8000/api/" : api;
    img = "http://localhost/webservice/images/"
    img = Platform.OS === 'android'
    ? "http://127.0.0.1:8000/images/" : img
} else {
  img = "";
  api = "";
}
export const API_URL = api//api;
export const IMG_URL = img;
export const CSRF_TOKEN = "base64:07/Lm/BB7OSXyAqo3KBoYLJJqrOHNl770MKnjSGgbWM=";
