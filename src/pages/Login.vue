<template>
  <div>
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-5">
        <div class="border p-4 text-center bg-light">
          <form>
            <v-text-field
                class=""
                label="email"
            > </v-text-field>
            <v-text-field
                label="password"
                type="password"
            ></v-text-field>
            <v-btn color="red" class="mr-5 text-lowercase" @click="submit">
              login
            </v-btn>
            <router-link to="/signup">
              <v-btn color="red" class="ml-5 text-lowercase signup" style="color: gray">
                ?signup
              </v-btn>
            </router-link>

<!--            login with-->

            <div class="mt-5">
              <span style="color: gray">
                login with
              </span>
              <a href="https://www.instagram.com" class="ml-4" style="font-size: 25px">
                <b-icon icon="instagram" style="color: red"></b-icon>
              </a>
              <a href="https://www.github.com" class="ml-4" style="font-size: 25px">
                <b-icon icon="github" style="color: gray"></b-icon>
              </a>
              <a href="https://www.google.com" class="ml-4" style="font-size: 25px">
                <b-icon icon="google" style="color: blue"></b-icon>
              </a>
            </div>
          </form>

        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return{

    }
  },

  name: "Login",
  methods: {
    submit(){
      console.log("submit")
    }
  }

}
</script>

<style scoped>

</style>