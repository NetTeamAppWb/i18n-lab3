import axios from "axios";

export class UserApiService{
    getAll() {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }
}