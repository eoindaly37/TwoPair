<template>
    <div class="user">
        <h1>Subcomponents List</h1>
        <div class="col-md-12">
            <table class="table table-dark table-striped table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Code</th>
                    <th scope="col">Jira</th>
                    <th scope="col">Playbook</th>
                    <th scope="col">TOI</th>
                    <th scope="col">Slack Support</th>
                    <th scope="col">Slack Engineer</th>
                </tr>
                </thead>
                <tbody v-for="sub in retrievedSubs">
                <tr>
                    <td>{{sub.id}}</td>
                    <td>{{sub.name}}</td>
                    <td>{{sub.notes}}</td>
                    <td>{{sub.code}}</td>
                    <td>{{sub.jira}}</td>
                    <td>{{sub.playbook}}</td>
                    <td>{{sub.toi}}</td>
                    <td>{{sub.slacksupport}}</td>
                    <td>{{sub.slackengineer}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import api from "./backend-api";

    export default {
        name: 'subcomponents',
        data() {
            return {
                response: [],
                errors: [],
                sub: {
                    id: 0,
                    name: '',
                    notes: '',
                    code: '',
                    jira: '',
                    playbook: '',
                    toi: '',
                    slacksupport: '',
                    slackengineer: ''
                },
                showResponse: false,
                retrievedSubs: {},
                showRetrievedSubs: false
            }
        },
        methods: {},
        retrieve() {
            api.getSubs().then(response => {
                // JSON responses are automatically parsed.
                console.log(response)
                this.retrievedSubs = response.data;
                this.showRetrievedSubs = true
            })
                .catch(e => {
                    this.errors.push(e)
                })

        },
        created() {
            api.getSubs().then(response => {
                console.log(response)
                this.retrievedSubs = response.data;
                this.showRetrievedSubs = true
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