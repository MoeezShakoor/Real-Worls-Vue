<template>
  <div class="modalPage">
		<Modal id="modal" class="modal" @closemodal="close" />
    <h1>Modal Page</h1>
    <button v-on:click="Show()">Show modal</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/modal.vue";
export default {
  name: "ModalPage",
  components: {
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
		}
  }
};
</script>
<style scoped>
h1 {
    text-align: center;
}
.modalPage {
    position: relative;
}
.modal {
    visibility: hidden;
    position:absolute;
}
</style>

