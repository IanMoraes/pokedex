import axios from "axios";

export default async function getData(url, params) {
  const res = await axios
    .get(url, {
      params: params,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}
