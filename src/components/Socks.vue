/* eslint-disable vue/require-v-for-key */
<template>
  <div>
    <p class="cart">Cart {{ cartValue }}</p>
    <div class="gridbox">
      <div>
        <img :src="variants[selectedIndex].variantImage" class="sockImage" />
      </div>
      <div class="grid-2">
        <h2>{{ itemName }}</h2>

        <br />
        <p v-if="Stock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-bind:key="detail" v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.variantID"
          class="colorbox"
          :style="{ backgroundColor: variant.variantColor }"
          v-on:mouseover="updatecolor(index)"
        ></div>

        <button v-on:click="incrementCart()">Add to cart</button>
        <button class="delbutton" v-on:click="decrementCart()">Delete</button>
      </div>
    </div>
    <hr />

    <!-- <div class="reviewbox">
      <h2>Reviews</h2>
      <br /><br />
      <p v-if="!reviews.length">there are no reviews</p>
      <ul>
        <li v-for="review in reviews">
          <p>{{ review.name }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div> -->
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: "Socks",
      cartValue: 0,
      brand: "branded",
      // image:'./assets/Images/greenSocks.jpg',
      selectedIndex: 0,
      reviews: [],
      cart: 0,
      details: ["80% Cotton", "20% polyester"],
      variants: [
        {
          variantID: 1,
          variantColor: "green",
          inventory: 10,
          variantImage: "../assets/greenSocks.png"
        },
        {
          variantID: 2,
          variantColor: "black",
          inventory: 0,
          variantImage: "../assets/blackSocks.png"
        }
      ]
    };
  },

  methods: {
    updatecolor(index) {
      this.selectedIndex = index;
    },
    incrementCart() {
      this.cartValue +=1;
    },
    decrementCart() {
      if (this.cartValue > 0) {
        this.cartValue -= 1;
      }
    }
    // addReview(productreview) {
    //   this.reviews.push(productreview);
  },

  computed: {
    itemName() {
      return this.brand + " " + this.Name;
    },
    image() {
      return this.variants[this.selectedIndex].variantImage;
    },
    Stock() {
      return this.variants[this.selectedIndex].inventory;
    }
  }
};
</script>
<style scoped>
.cart {
  float: right;
  border: 1px solid gray;
  font-size: 30px;
  margin: 20px;
}
.gridbox {
  padding: 30px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 450px;
}
.sockImage {
  width: 400px;
  height: 400px;
}
.grid-2 {
  padding-left: 120px;
  text-align: left;
}
.colorbox {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
}
button {
  font-size: 20px;
  width: 130px;
  height: 50px;
  border-radius: 6px;
  color: black;
  background-color: cadetblue;
}
.delbutton {
  background-color: grey;
}
</style>
