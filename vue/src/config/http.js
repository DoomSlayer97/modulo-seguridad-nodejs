import Axios from "axios"

const axios = Axios.create({
  baseURL: "http://localhost:3000/api"
});

const token = sessionStorage.getItem("user_token") || false;

if ( token ) {

  axios.defaults.headers["auth"] `${token}`;

}

export default axios;
