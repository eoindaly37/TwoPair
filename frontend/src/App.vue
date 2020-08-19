
<template class="">
  <div class="mystyles">
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/hello">VMware 2Pair</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/subcomponents">Subcomponents</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/product">Products</router-link>
          </li>
          <!--
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/bootstrap">Bootstrap</router-link>
          </li>
          -->
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/user">Users</router-link>
          </li>
          <li class="nav-item"></li>

          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/domain">Domains</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
    </div>
    <router-view :hellomsg="msg"></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to 2Pair'
    }
  }
}
</script>

<style lang="css">


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
}

.navbar {
  background: rgb(34, 83, 195);
  background: linear-gradient(50deg, rgba(34, 83, 195, 1) 0%, rgba(65, 180, 36, 1) 100%);
}

@media screen and (max-width: 800px) {
  .main-content{width: 90%;}
  .company__info{
    display: none;
  }
  .login_form{
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
  }
}
@media screen and (min-width: 780px) and (max-width:800px){
  .main-content{width: 70%;}
}
.row > h2{
  color: rgba(65,180,36,1) !important;
}
</style>
