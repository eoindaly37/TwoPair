<template>
    <div class="domain">
        <input type="text" v-model="domain.name" placeholder="name">

        <button @click="createNewDomain()">Add Domain</button>
        <h1>Domain List</h1>
        <div class="col-md-12">
            <table class="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                <tbody v-for="domain in retrievedDomain">
                <tr>
                    <td>{{domain.id}}</td>
                    <td>{{domain.name}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import api from "./backend-api";

    export default {
        name: 'domain',
        data() {
            return {
                response: [],
                errors: [],
                domain: {
                    id: 0,
                    name: ''
                },
                showResponse: false,
                retrievedDomain: {},
                showRetrievedDomain: false
            }
        },

        created() {
            this.getData();

        },
        methods: {
            createNewDomain () {
                console.log(this.domain.name);
                api.createDomain(this.domain.name).then(response => {
                    // JSON responses are automatically parsed.
                    this.response = response.data;
                    this.domain.id = response.data;
                   // console.log('Created new Domain with Id ' + response.data);
                    console.log(response)
                    this.showResponse = true
                })
                    .catch(e => {
                        this.errors.push(e)
                    })

            },

            getData() {
                api.getDomains().then(response => {
                    console.log(response)
                    this.retrievedDomain = response.data;
                    this.showRetrievedDomain = true
                })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>