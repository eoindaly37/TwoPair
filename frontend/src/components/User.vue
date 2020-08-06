<template>
    <div class="user">
        <h1>User List</h1>
        <h3>Just some database interaction...</h3>
        <h4 v-if="showRetrievedUser">Retrieved User {{retrievedUser.name}} {{retrievedUser.email}}</h4>
        <div class="col-md-12">
            <table class="table table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Slack</th>
                </tr>
                </thead>
                <tbody v-for="user in retrievedUser">
                <tr>y
                    <td>{{user.id }}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.slack}}</td>
                </tr>

                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import api from "./backend-api";

    export default {
        name: 'user',
        data() {
            return {
                users: [],
                response: [],
                errors: [],
                user: {
                    name: '',
                    email: '',
                    slack: '',
                    id: 0
                },
                showResponse: false,
                retrievedUser: {},
                showRetrievedUser: false
            }
        },
        methods: {},
        retrieveUser() {
            api.getUsers().then(response => {
                // JSON responses are automatically parsed.
                console.log(response)
                this.retrievedUser = response.data;
                this.showRetrievedUser = true
            })
                .catch(e => {
                    this.errors.push(e)
                })

        },
        created() {
            api.getUsers().then(response => {
              console.log(response)
              this.retrievedUser = response.data;
              this.showRetrievedUser = true
            })
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