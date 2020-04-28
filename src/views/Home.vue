<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Socks />
    <Reviews />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Socks from "@/components/Socks.vue";
import Reviews from "@/components/Reviews.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Socks,
    Reviews
  }
};
</script>
