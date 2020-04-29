<template>
	<div id="modal" class="modal">
		<div id="modalBoxCross" class="modalBoxCross">
			<i class="fas fa-times"  v-on:click="closemodal()"></i>
		</div>
		<div id="modalBox" class="modalBox">
			This is a modal 
			<br><br>
			<input class="del-button" type="button" value="Delete" v-on:click="Del_Confirm_Yes()">
			<input class="no-button" type="button" value="No" v-on:click="Del_Confirm_No()">     
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		Del_Confirm_Yes(){
			this.$emit('closemodal')
		},
		Del_Confirm_No(){
			this.$emit('closemodal')
		},
		closemodal(){
			this.$emit('closemodal')
		}
	}
	
}
</script>

<style scoped>
.modal{
	visibility: hidden;
	/* position: absolute; */
	background-color: rgba(139, 139, 139, 0.6);
	/* height:100%;
	width: 100%; */
	padding-top: 19%;
	padding-right:  34%;
	padding-bottom:  50%;
	padding-left:  34%;
}
.modalBoxCross{
	background-color: rgb(236, 244, 248);
	width: 430px;
	height: 30px;
	border-radius: 5px 5px 0px 0px;
	border: 1px solid green;
	font-size: 17px;
	border-bottom:  none;
	/* margin-top: auto;
	margin-right:auto ;
	margin-bottom:auto ;
	margin-left:36%; */
}
.modalBoxCross i{
	float: right;
	padding-top: 6px;
	padding-right:  9px;
	cursor: pointer;
}
			
.modalBox{
	background-color: rgb(255, 253, 253);
	width: 430px;
	height: 140px;
	border-radius: 0px 0px 5px 5px ;
	box-shadow: 10px 10px 10px gray;
	border: 1px solid green;
	font-size: 17px;
	border-top:  1px solid rgb(224, 221, 221);
	/* padding-top: 15px;
	padding-right:  auto;
	padding-bottom: auto;
	padding-left:  16px; */
}
.del-button{
	margin-top: 25px;
	background-color: green;
	color: white;
	font-size: 20px;
	margin-right: 10px;
	margin-left: 150px;
	width: 110px;
	height: 40px;
}
.no-button{
		background-color: white;
    color: green;
    font-size: 20px;
		margin-top: 25px;
		margin-right:10px,;
		width: 110px;
		height: 40px;
}
@media screen and (max-width:1100px){
	.modalBoxCross{
		margin-top: auto;
		margin-right:auto ;
		margin-bottom:auto ;
		margin-left:24%;
	}
	.modalBox{
		margin-top: auto;
		margin-right:auto ;
		margin-bottom:auto ;
		margin-left:24%;
	}
}
@media screen and (max-width:600px){
	.modalBoxCross{
		margin-top: auto;
		margin-right:auto ;
		margin-bottom:auto ;
		margin-left:13%;
	}
	.modalBox{
		margin-top: auto;
		margin-right:auto ;
		margin-bottom:auto ;
		margin-left:13%;
	}
	.modal{
		height: 260px;
	}
}
</style>