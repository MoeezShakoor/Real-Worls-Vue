<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="modalPage">
      <Modal id="modal" class="modal" @closemodal="close" >
        <p slot="Title" class="pop-up-title">Confirmation</p>
        <p slot="description">Do you want to hide review section?</p>
        <p id="Action" slot="action" class="pop-up-act">Hide</p>
      </Modal>
      <button id="hide-button" v-on:click="Show()">Hide reviews</button>
    </div>
    <Socks />
    <Reviews id="review" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Socks from "@/components/Socks.vue";
import Reviews from "@/components/Reviews.vue";
import Modal from "@/components/modal.vue";
export default {
  name: "Home",
  components: {
    Socks,
    Reviews,
    Modal
  },
  methods: {
		Show() {
			var modalBox= document.getElementById("modal");
			modalBox.style.visibility= "visible";
		},
		close(){
			var modalBox= document.getElementById("modal");
      modalBox.style.visibility= "hidden";
      var Review= document.getElementById("review");
      Review.style.visibility= "hidden";
      document.getElementById("hide-button").innerHTML = "Show Reviews";
      document.getElementById("Action").innerHTML = "Show";
		}
  }
};
</script>
<style scoped>
.modalPage {
    position: relative;
}
.modal {
    visibility: hidden;
    position:absolute;
}
.pop-up-title{
  display: inline;
}
.pop-up-act{
      margin-top: 5px;
}
</style>
