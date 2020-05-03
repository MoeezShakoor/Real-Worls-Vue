<template>
  <div class="about">
    <h2>Nuton</h2>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
      Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </p>
    <hr/>
    <Contact/>
  </div>
</template>
<script>
// @ is an alias to /src
import Contact from "@/components/contact.vue";
export default {
  name: "About",
  components: {
    // HelloWorld
    Contact
  }
};
</script>