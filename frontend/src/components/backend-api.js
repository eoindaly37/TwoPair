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
    getUser(userId) {
        return AXIOS.get(`/users/` + userId);
    },
    createUser(name, email, slack) {
        return AXIOS.post(`/users`, {"name":  name,  "email": email, "slack":slack});
    },

    getDomains() {
        return AXIOS.get(`/domains`);
    },
    getDomain(domainid) {
        return AXIOS.get(`/domains/` + domainid);
    },
    createDomain(name) {
        return AXIOS.post(`/domains`, {"name":  name});
    },

    getProducts() {
        return AXIOS.get(`/products`);
    },
    getProduct(productid) {
        return AXIOS.get(`/products/` + productid);
    },
    createProduct(name, lead, domain) {
        var userres = this.getUser(lead);
        var domainres = this.getDomain(domain);

        axios.all([userres,domainres])
            .then(axios.spread((userDTO,domainDTO) =>{
                return AXIOS.post(`/products`, {"name": name, "lead": userDTO.data, "domain": domainDTO.data});
        }))
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    },

    getSubs(){
        return AXIOS.get('/subcomponents')
    },

    getSecured(user, password) {
        return AXIOS.get(`/secured/`,{
            auth: {
                username: user,
                password: password
            }});
    }
}


