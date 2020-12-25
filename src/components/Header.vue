<template>
  <div>
    <v-app-bar class="bg-dark  " >
      <nav class="navbar float-right " >
        <router-link style="color: white" class="navbar-brand" to="/" exact>home</router-link>
        <router-link style="color: white" class="navbar-brand" to="/about" >about</router-link>
        <router-link style="color: white" class="navbar-brand" to="/login" >login</router-link>
        <router-link style="color: white" class="navbar-brand" to="/signup" >signUp</router-link>
      </nav>
    </v-app-bar>






  </div>



</template>

<script>
export default {
  name: "Header",
  data(){
    return{

    }
  }
}
</script>

<style >

.router-link-active{
  border-bottom: 2px solid gray;
  color: gray!important;
}

</style>