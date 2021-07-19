import { handleError,handleResponse } from '../../../utilities/response';
class UserApi {
    BASE_URL;
    axios;
    constructor(url,axios_instance) {
        this.BASE_URL = url;
        this.axios = axios_instance;
    }

    getUser(){ 
            return this.axios 
            .get(`${this.BASE_URL}/auth/user/detail`) 
            .then(handleResponse) 
            .catch(handleError); 
  }

}

export default UserApi
