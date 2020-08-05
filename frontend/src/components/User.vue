<template>
  <div class="user">
    <h1>User List</h1>

    <h3>Just some database interaction...</h3>

    <div class="col-md-12">
      <table  class="table table-dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Slack</th>
        </tr>
        </thead>
        <tbody v-for="users in usersDTO">
        <tr>
          <td>{{users.id }}</td>
          <td>{{users.name}}</td>
          <td>{{users.email}}</td>
          <td>{{users.slack}}</td>
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

    data () {
      return {
        response: [],
        errors: [],
        user: {
          id: 0
          name: '',
          email: '',
          slack: '',
        },
        showResponse: false,
        retrievedUser: {},
        showRetrievedUser: false
      }
    },
    methods: {
      },
      retrieveUser () {
        api.getUser(this.user.id).then(response => {
            // JSON responses are automatically parsed.
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
