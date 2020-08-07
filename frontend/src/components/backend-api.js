import axios from 'axios'


// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     console.log(config)
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
const AXIOS = axios.create({
    baseURL: ``,
    timeout: 1000
});

export default {
    hello() {
        return AXIOS.get(`/hello`);
    },
    getUsers() {
        return AXIOS.get(`/users`);
    },
    getSubs(){
         return AXIOS.get('/subcomponents')
    },
    getUser(userId) {
        return AXIOS.get(`/users/` + userId);
    },
    createUser(firstName, lastName) {
        return AXIOS.post(`/users/` + firstName + '/' + lastName);
    },
    getSecured(user, password) {
        return AXIOS.get(`/secured/`,{
            auth: {
                username: user,
                password: password
            }});
    }
}


