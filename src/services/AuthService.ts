import axios from 'axios';

const API_URL = 'http://localhost:8081/api/v1/auth';
const LAST_LOGIN_TIME = "last-login-time";
const TOKEN = "token";
const USER = "user"

const login = (userId, password) => {
  return axios.post(API_URL + "/login", {
    userId,
    password
  })
  .then(response => {
    console.log(response)
    if (response.data.access_token) {
        console.log("save localStorage user", response.data)
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem(LAST_LOGIN_TIME);
  localStorage.removeItem(USER);
  sessionStorage.removeItem(TOKEN);
};

export default {
  login,
  logout
};