import axios from "axios";

const instance = axios.create({
	baseURL: "https://whatsapp-mern-backend-123.herokuapp.com/",
});

export default instance;