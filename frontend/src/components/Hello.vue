<template>
  <div class="main">
  <img src="../assets/vmt.png">
  <div class="container-fluid d-flex justify-content-center">
    <div class="row main-content bg-success text-center">
      <div class=" col-md-4 text-center company__info">
        <span class="company__logo">
        </span>
        <h4 class="company_title">Welcome to 2Pair</h4>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row">
            <form control="" class="form-group">
              <div class="row">
                <input type="text" name="username" id="username" class="form__input" placeholder="Username">
              </div>
              <div class="row">

                <input type="password" name="password" id="password" class="form__input" placeholder="Password">
              </div>
              <div class="row remb">
                <input type="checkbox" name="remember_me" id="remember_me" class="">
                <label class="remember" for="remember_me">Remember Me!</label>
              </div>
              <div class="row">
                <input type="submit" value="Submit" class="btn btn btn-outline-success">
              </div>
            </form>
          </div>
          <div class="row reg">
            <p>Don't have an account? <a href="landing.html">Register Here</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
  name: 'hello',
  props: { hellomsg: { type: String, required: true } }
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


.main-content{
  width: 40%;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,.3);
  margin: 5em auto;
  display: flex;
}
.company__info{
  background: rgb(34,83,195);
  background: linear-gradient(50deg, rgba(34,83,195,1) 0%, rgba(65,180,36,1) 100%);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.log{
  margin-left: 3%;
}
.login_form{
  background-color: #fff;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
  border-top:1px solid #ccc;
  border-right:1px solid #ccc;
}
form{
  padding: 0 2em;
}
.form__input{
  width: 100%;
  border:1px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em .6em .6em;
  padding-left: 2em;
  outline:none;
  margin:1.5em auto;
  transition: all .5s ease;
}
.form__input:focus{
  border-bottom-color: rgba(65,180,36,1) !important;
  box-shadow: 0 0 5px rgb(34,83,195);
  border-radius: 4px;
}


.btn:hover, .btn:focus{
  background-image: linear-gradient(50deg, rgba(34,83,195,1) 0%, rgba(65,180,36,1) 100%) !important;
  color:#fff;
}

.remember{
  padding-top: 2%;
  padding-left: 2%;
}

.row .reg{
  padding-left: 4%;
}
</style>
