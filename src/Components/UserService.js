import axios from "axios";
import {ProcessUsersHere} from "./UsersUtility";



const Geektrust_Api =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";


export function getUsersHere(setUsersHere){
  axios
    .get(Geektrust_Api)
    .then((response) => {
      setUsersHere(ProcessUsersHere(response.data));
    })
    .catch((error) => getLocalUsersHere(setUsersHere));
};

const getLocalUsersHere = (setUsersHere) => {
  axios
    .get("./members.json")
    .then((response) => {
      setUsersHere(ProcessUsersHere(response.data));
    })
    .catch((error) => console.error(error));
};
