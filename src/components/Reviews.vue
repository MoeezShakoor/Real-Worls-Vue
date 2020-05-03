<template>
	<div>
		<div class="reviewbox">
			<h2>Reviews</h2>
			<br><br>
			<p v-if="!reviews.length"> there are no reviews</p>
			<ul>
				<li v-bind:key="review" v-for="review in reviews">
				<p>User Name: {{review.name}}</p>
				<p>Opinion: {{review.review}}</p>
				</li>
			</ul>
		</div>
    <form class="formarea" @submit.prevent="onsubmit">
			<h3>Add a Review</h3>
			<hr />
			<p>
				<label for="name">name: </label>
				<input id="name" v-model="name">
			</p>
			<p>
				<label for="review">review: </label>
				<textarea id="review" v-model="review"></textarea>
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
		review:null,
      	reviews: []
    };
  },

  methods: {
		onsubmit(){
			let productreview={
				name: this.name,
				review: this.review
			}
			this.reviews.push(productreview);
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
.reviewbox{
	padding-left:30px;
	padding-right:30px;
	padding-bottom:10px;
}
.reviewbox li{
	text-align: left;
}
</style>