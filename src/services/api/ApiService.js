import StoryApi  from "./endpoints/story";
import UserApi from "./endpoints/user";
import axios from 'axios'; 
import history from "../../utilities/history";

class ApiService{
    BASE_URL = 'http://127.0.0.1:8000/api/v1'; 

    storyApi;
    axiosInstance = axios.create({
        baseURL: this.BASE_URL,
        
      });

    constructor(){
        this.storyApi = new StoryApi(this.BASE_URL,this.axiosInstance)
        this.userApi = new UserApi(this.BASE_URL,this.axiosInstance)

        this.axiosInstance.interceptors.request.use(
            async config => {
              config.headers = { 
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              }
              return config;
            },
            error => {
              Promise.reject(error)
          });
        this.axiosInstance.interceptors.response.use((response) => response, (error) => {
            // whatever you want to do with the error
            console.log("error")
            let err = error.response
            if (err.status==401 && err.statusText == "Unauthorized"){
                console.log("hui")
                history.push('/auth/login');
            }
            throw error;
          });
    }

}

const apiService = new ApiService()
export default apiService;