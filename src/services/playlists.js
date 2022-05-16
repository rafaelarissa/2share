import api from "./api";
import axios from "axios";

axios("https://accounts.spotify.com/api/token", {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " +
      btoa(
        "e529efd86cf04fcaa28f718c2d5cdcba" +
          ":" +
          "ee12f3b8e1c74efabdef9c0e1fc12ab5"
      ),
  },
  data: "grant_type=client_credentials",
  method: "POST",
}).then((tokenResponse) => {
  console.log(tokenResponse.data.access.token);
});
