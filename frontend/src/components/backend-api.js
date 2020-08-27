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

    getLookList() {
        return AXIOS.get(`/lookforhelp`);
    },
    getLook(lookid) {
        return AXIOS.get(`/lookforhelp/` + lookid);
    },
    createLookForHelp(productid, userid) {
        var productres = this.getProduct(productid);
        var userres = this.getUser(userid);

        axios.all([productres,userres])
            .then(axios.spread((productDTO,userDTO) =>{
                return AXIOS.post(`/lookforhelp`, {"productid": productDTO.data, "userid": userDTO.data});
            }))
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    },

    getPairList() {
        return AXIOS.get(`/pairwith`);
    },
    getPairWith(pairid) {
        return AXIOS.get(`/pairwith/` + pairid);
    },
    createPairWith(productid, userid) {
        var productres = this.getProduct(productid);
        var userres = this.getUser(userid);

        axios.all([productres,userres])
            .then(axios.spread((productDTO,userDTO) =>{
                return AXIOS.post(`/pairwith`, {"productid": productDTO.data, "userid": userDTO.data});
            }))
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    },

    getSubs(){
        return AXIOS.get('/subcomponents')
    },
    getSubcomponent(subid){
        return AXIOS.get(`/subcomponents/` + subid);
    },
    createSubcomponent(productid, name, notes, code, jira, playbook, toi, slacksupport, slackengineer) {
        var productres = this.getProduct(productid).then(response => {
            console.log(productres.data);
            console.log(response.data);
            return AXIOS.post(`/subcomponents`, {"productid": response.data, "name": name, "notes": notes, "code": code
                , "jira": jira, "playbook": playbook, "toi": toi, "slacksupport": slacksupport, "slackengineer": slackengineer});
        }).catch(errors => {
            // react on errors.
            console.error(errors);
        });
    },

    getSecured(user, password) {
        return AXIOS.get(`/secured/`,{
            auth: {
                username: user,
                password: password
            }});
    }
}


