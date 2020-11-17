import axios from "axios";

const instance = axios.create({
	baseURL: "https://whatsapp-backend123.herokuapp.com/",
});

export default instance;