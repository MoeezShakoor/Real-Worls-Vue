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
import Socks from "@/components/Socks.vue";
import Reviews from "@/components/Reviews.vue";
export default {
  name: "Home",
  components: {
    Socks,
    Reviews
  }
};
</script>
