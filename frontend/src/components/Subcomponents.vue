<template>
    <div class="user">
      <div v-if="!isHidden" class="inputs container-md" >
        <ejs-dropdownlist popupHeight="200px" popupWidth="250px"
                          :dataSource='productData' :fields='productField' placeholder='Select a Product'
                          v-model="sub.productid"
                          sortOrder='Descending'>
        </ejs-dropdownlist>
        <input type="text" v-model="sub.name" placeholder="Name">
        <input type="text" v-model="sub.notes" placeholder="Notes">
        <input type="text" v-model="sub.code" placeholder="Code">
        <input type="text" v-model="sub.jira" placeholder="JIRA">
        <input type="text" v-model="sub.playbook" placeholder="Playbook">
        <input type="text" v-model="sub.toi" placeholder="TOI">
        <input type="text" v-model="sub.slacksupport" placeholder="Slack Support">
        <input type="text" v-model="sub.slackengineer" placeholder="Slack Engineer">
        <button v-on:click="isHidden = !isHidden" @click="createSub()">Add Entry</button>
      </div>
        <h1>Subcomponents List</h1>
            <div class="container-lg">
                <div class="table-responsive container-fluid">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-5">
                                    <h2><b>Users</b></h2>
                                </div>
                                <div class="col-sm-7">
                                  <button v-on:click="isHidden = !isHidden" type="button" class="btn btn-danger">Edit</button>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                            <tr>
                              <th v-column-sortable:id>#</th>
                              <th v-column-sortable:productid.name>Product</th>
                              <th v-column-sortable:name>User</th>
                              <th v-column-sortable:notes>Notes</th>
                              <th v-column-sortable:code>Code</th>
                              <th v-column-sortable:jira>Jira</th>
                              <th v-column-sortable:playbook>Playbook</th>
                              <th v-column-sortable:toi>TOI</th>
                              <th v-column-sortable:slacksupport>Slack Support</th>
                              <th v-column-sortable:slackengineer>Slack Engineer</th>
                            </tr>
                            </thead>
                            <tbody v-for="sub in retrievedSubs">
                            <tr>
                                <td>{{sub.id}}</td>
                                <td><a href="#"class="avatar">{{sub.productid.name}}</a></td>
                                <td>{{sub.name}}</td>
                                <td>{{sub.notes}}</td>
                                <td>{{sub.code}}</td>
                                <td>{{sub.jira}}</td>
                                <td>{{sub.playbook}}</td>
                                <td>{{sub.toi}}</td>
                                <td>{{sub.slacksupport}}</td>
                                <td>{{sub.slackengineer}}</td>
                                <td>
                                    <a href="#" class="settings" title="Settings" data-toggle="tooltip"><fa-icon :icon="['fas', 'wrench']"/></a>
                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip"><fa-icon class = "test" :icon="['fas', 'trash-alt']"/></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import api from "./backend-api";
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import columnSortable from 'vue-column-sortable';


Vue.use(DropDownListPlugin);
export default {
    name: 'subcomponents',
    data() {
        return {
          isHidden: true,
            response: [],
            errors: [],
            sub: {
                id: 0,
                productid: 0,
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
            showRetrievedSubs: false,
            productData: [],
            productField: { text: 'name', value: 'id' },
        }
    },
    created() {
        this.getData();
    },
    directives: {columnSortable},
    methods: {
      orderBy(sortFn) {
        this.retrievedSubs.sort(sortFn)
      },
      createSub () {
        api.createSubcomponent(this.sub.productid, this.sub.name, this.sub.notes, this.sub.code, this.sub.jira
            , this.sub.playbook, this.sub.toi, this.sub.slacksupport, this.sub.slackengineer).then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data;
          this.sub.id = response.data;
          // console.log('Created new User with Id ' + response.data);
          console.log(response)
          this.showResponse = true
        })
            .catch(e => {
              this.errors.push(e)
            })

      },
        getData() {
            api.getSubs().then(response => {
                console.log(response)
                this.retrievedSubs = response.data;
                this.showRetrievedSubs = true
            });

            api.getProducts().then(response => {
              this.productData = response.data;
            })
                .catch(e => {
                  this.errors.push(e)
                });
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

.inputs {
  width: 12%;
}

.table-responsive {
    margin: 40px 0;

}
.table-wrapper {
    min-width: 1000px;
    background: #fff;
    padding: 20px 25px;
    border-radius: 6px;
    box-shadow: 0 3px 3px rgba(0,0,0,.05);
}
.table-title {
    padding-bottom: 10px;
    background: linear-gradient(50deg, rgba(34,83,195,1) 0%, rgba(65,180,36,1) 100%);
    color: #fff;
    padding: 20px 30px;
    margin: -20px -27px 10px;
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    padding-right: 50%;
    font-size: 24px;
}
.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn:hover, .table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}

table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table tr th:first-child {
    width: 60px;
}
table.table tr th:last-child {
    width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
table.table td a:hover {
    color: #2196F3;
}
table.table td a.settings {
    color: #2196F3;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}

@media (min-width: 1200px){
    .table-responsive {
        width: 1170px;
    }
}
</style>