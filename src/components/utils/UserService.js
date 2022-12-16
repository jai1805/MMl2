import axios from 'axios'

const USER_REST_API_URL = "http://localhost:8080/api/v1/movies250";
const USER_REST_API_URL2 = "http://localhost:8080/api/v1/first_query2";
const USER_REST_API_URL3 = "http://localhost:8080/api/v1/first_query3";
const USER_REST_API_URL4 = "http://localhost:8080/api/v1/first_query4";
const USER_REST_API_URL5 = "http://localhost:8080/api/v1/first_query5";
const USER_REST_API_URL6 = "http://localhost:8080/api/v1/first_query6";

class UserService{
    get250movies(){
        return axios.get(USER_REST_API_URL);
    }

    getSecondQuery(){
        return axios.get(USER_REST_API_URL2)
    }

    getThirdQuery(){
        return axios.get(USER_REST_API_URL3)
    }

    getFourthQuery(){
        return axios.get(USER_REST_API_URL4)
    }

    getFifthQuery(){
        return axios.get(USER_REST_API_URL5)
    }

    getSixthQuery(){
        return axios.get(USER_REST_API_URL6)
    }
}

export default new UserService();