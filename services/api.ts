import axios from "axios";

const api = axios.create({
    //baseURL: "https://www.boredapi.com/api/activity",
    baseURL: "https://mee-tour.herokuapp.com/api/",
});

export default api;