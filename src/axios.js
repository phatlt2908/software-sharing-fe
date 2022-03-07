import axios from "axios";

export default axios.create({
    baseURL: "http://dayne.info/api",
    headers: {
        "Content-type": "application/json"
    }
});