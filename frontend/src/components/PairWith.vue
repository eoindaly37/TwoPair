<template>
  <div class="user">
    <div v-if="!isHidden" class="inputs container-md" >
      <ejs-dropdownlist popupHeight="200px" popupWidth="250px"
                        :dataSource='productData' :fields='productField' placeholder='Select a Product'
                        v-model="pairwith.productid"
                        sortOrder='Descending'>
      </ejs-dropdownlist>
      <ejs-dropdownlist popupHeight="200px" popupWidth="250px"
                        :dataSource='userData' :fields='userField' placeholder='Select a User'
                        v-model="pairwith.userid"
                        sortOrder='Descending'>
      </ejs-dropdownlist>
      <button v-on:click="isHidden = !isHidden" @click="createPairWith()">Add Entry</button>
    </div>
    <h1>Pair With</h1>
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
              <th v-column-sortable:userid.name>User</th>
            </tr>
            </thead>
            <tbody v-for="pairwith in retrievedPair">
            <tr>
              <td>{{pairwith.id}}</td>
              <td>{{pairwith.productid.name}}</td>
              <td>{{pairwith.userid.name}}</td>
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
  name: 'pairwith',
  data() {
    return {
      isHidden: true,
      response: [],
      errors: [],
      pairwith: {
        id: 0,
        productid: 0,
        userid: 0,

      },
      showResponse: false,
      retrievedPair: {},
      showRetrievedPair: false,
      productData: [],
      productField: { text: 'name', value: 'id' },
      userData: [],
      userField: { text: 'name', value: 'id' }
    }
  },

  created() {
    this.getData();

  },
  directives: {columnSortable},
  methods: {
    orderBy(sortFn) {
      this.retrievedPair.sort(sortFn)
    },
    createPairWith () {
      console.log(this.pairwith.productid + " "  + this.pairwith.userid);
      api.createPairWith(this.pairwith.productid, this.pairwith.userid).then(response => {
        // JSON responses are automatically parsed.
        this.response = response.data;
        this.pairwith.id = response.data;
        // console.log('Created new User with Id ' + response.data);
        console.log(response)
        this.showResponse = true
      })
          .catch(e => {
            this.errors.push(e)
          })

    },

    getData() {
      api.getPairList().then(response => {
        console.log(response)
        this.retrievedPair = response.data;
        this.showRetrievedPair = true
      })
          .catch(e => {
            this.errors.push(e)
          });

      api.getUsers().then(response => {
        this.userData = response.data;
      })
          .catch(e => {
            this.errors.push(e)
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