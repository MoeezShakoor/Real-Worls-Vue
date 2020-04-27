var Cart = {
  data: {
    cartValue: 0
  },
  methods: {
    addtocart() {
      this.cartValue += 1;
    },
    delFromCart() {
      if (this.cartValue > 0) {
        this.cartValue -= 1;
      }
    },
    showvalue() {
      return this.cartValue;
    }
  }
};
export default Cart;
