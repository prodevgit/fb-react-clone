
import axios from 'axios'; 
import { handleError } from '../../utilities/response';
import { Route } from 'react-router';
import { Redirect } from 'react-router';
import history from '../../utilities/history';

class AuthService {
    BASE_URL = 'http://127.0.0.1:8000/api/v1'; 
    isAuthenticated=false
    authToken =''
    user;

    authenticate() {
      this.isAuthenticated = true
    }

    login(auth_data){
        return axios 
          .post(`${this.BASE_URL}/auth/login`,auth_data) 
          .then((res) => {
              if(res.data.key){
                this.authToken = res.data.key
                localStorage.setItem('token', this.authToken);
                this.authenticate()
                history.push('/')
              }
              return res;
          })
          .catch(handleError);
    }

    register(auth_data){
      return axios 
        .post(`${this.BASE_URL}/auth/create`,auth_data) 
        .then((res) => {
            if(res.data.key){
              this.authToken = res.data.key
              localStorage.setItem('token', this.authToken);
              this.authenticate()
              history.push('/')
            }
            return res;
        })
        .catch(handleError);
  }

    logout() {
      this.isAuthenticated = false
    }

  }

  

  const authService = new AuthService()

  export default authService;