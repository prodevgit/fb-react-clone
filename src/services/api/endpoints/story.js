import { handleError,handleResponse } from '../../../utilities/response';
class StoryApi {
    BASE_URL;
    axios;
    constructor(url,axios_instance) {
        this.BASE_URL = url;
        this.axios = axios_instance;
    }

    getStoryList(limit=0){ 
        if (limit){
            return this.axios 
            .get(`${this.BASE_URL}/story/list?limit=${limit}`) 
            .then(handleResponse) 
            .catch(handleError); 
        }
        else{
            return this.axios 
          .get(`${this.BASE_URL}/story/list`) 
          .then(handleResponse) 
          .catch(handleError); 
        }
  }

}

export default StoryApi
