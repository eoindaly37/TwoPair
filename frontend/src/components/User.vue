<template>
    <div class="user">
        <input type="text" v-model="user.name" placeholder="name">
        <input type="text" v-model="user.email" placeholder="email">
        <input type="text" v-model="user.slack" placeholder="@slack">

        <button @click="createNewUser()">Add User</button>
        <input type="text" v-model="user.id" placeholder="name">
        <button @click="deleteExistingUser()">Delete User</button>
        <h1>User List</h1>
        <div class="col-md-12">
            <table class="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Slack</th>
                </tr>
                </thead>
                <tbody v-for="user in retrievedUser">
                <tr>
                    <td>{{user.id}}</td>
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
                response: [],
                errors: [],
                user: {
                    id: 0,
                    name: '',
                    email: '',
                    slack: '',

                },
                showResponse: false,
                retrievedUser: {},
                showRetrievedUser: false
            }
        },

        created() {
            this.getData();

        },

        methods: {
            deleteExistingUser () {
                api.deleteUser.delete(this.user.id)
                    .then(response => {
                        this.response = response.data;
                        this.user.id = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            createNewUser () {
                console.log(this.user.name + " " + this.user.email + " "  + this.user.slack);
                api.createUser(this.user.name, this.user.email, this.user.slack).then(response => {
                    // JSON responses are automatically parsed.
                    this.response = response.data;
                    this.user.id = response.data;
                   // console.log('Created new User with Id ' + response.data);
                    console.log(response)
                    this.showResponse = true
                })
                    .catch(e => {
                        this.errors.push(e)
                    })

            },

            getData() {
                api.getUsers().then(response => {
                    console.log(response)
                    this.retrievedUser = response.data;
                    this.showRetrievedUser = true
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