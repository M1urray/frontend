import axios from "axios"

const API_URL ="https://192.168.31.11:8080/api/v1/auth/"

class AuthService {
    login(username, password) {
        return axios
        .post(API_URL + "authenticate",{
            username,
            password
        })
        .then(responce => {
            if (response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }
    logout(){
    localStorage.removeItem("user");
    }
    register(username,email,password,){
        return axios.post(API_URL+"register",{
            username,
            email,
            password
        });
    }
}