<template>
  <v-app>
    <HelloWorld msg="Welcome to My website"/>
    <div class="text-center">
        <div>
          <v-btn
              class="ma-2"
              color="primary"
              dark
          >
            Accept
            <v-icon
                dark
                right
            >
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>

          <v-btn
              class="ma-2"
              color="red"
              dark
          >
            Decline
            <v-icon
                dark
                right
            >
              mdi-cancel
            </v-icon>
          </v-btn>

          <v-btn
              class="ma-2"
              dark
          >
            <v-icon
                dark
                left
            >
              mdi-minus-circle
            </v-icon>Cancel
          </v-btn>
        </div>

        <div>
          <v-btn
              class="ma-2"
              color="orange darken-2"
              dark
          >
            <v-icon
                dark
                left
            >
              mdi-arrow-left
            </v-icon>Back
          </v-btn>

          <v-btn
              class="ma-2"
              color="purple"
              dark
          >
            <v-icon dark>
              mdi-wrench
            </v-icon>
          </v-btn>

          <v-btn
              class="ma-2"
              color="indigo"
              dark
          >
            <v-icon dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </div>

        <div>
          <v-btn
              class="ma-2"
              text
              icon
              color="blue lighten-2"
          >
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>

          <v-btn
              class="ma-2"
              text
              icon
              color="red lighten-2"
          >
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
        </div>
      </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
