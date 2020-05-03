<template>
	<div>
    <form class="formarea" @submit.prevent="onsubmit">
			<h3>Add your Query</h3>
			<hr />
			<p>
				<label for="name">name: </label>
				<input id="name" v-model="name">
			</p>
			<p>
				<label for="Issue">Query: </label>
				<textarea id="Issue" v-model="Issue"></textarea>
			</p>
			<p>
			<input type="submit" value="submit">
			</p>
		</form>
  </div>
</template>
<script>
export default {
  data() {
    return {
			name:null,
			Issue:null,
      Issues: []
    };
  },

  methods: {
		onsubmit(){
			let productreview={
				name: this.name,
				Issue: this.Issue
			}
			this.Issues.push(productreview);
			this.name=null
			this.review=null
		}
  }
};
</script>
<style scoped>
.formarea{
	padding-left:15px;
	padding-right:15px;
	padding-top:5px;
	padding-bottom:5px;
	margin-top: 50px;
	width: 350px;
	border: 1px solid gray;
	margin-left: 50px;
}
</style>