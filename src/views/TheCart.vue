<template>
  <div class="container-fluid pt-5">
    <div class="row px-xl-5">
      <div
        class="col-lg-8 table-responsive mb-5"
        v-if="cartItems && cartItems.length > 0"
      >
        <table class="table table-bordered text-center mb-0">
          <thead class="bg-secondary text-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody class="align-middle">
            <tr v-for="item in cartItems" :key="item.id">
              <td class="align-middle">
                <img :src="item.image" alt="" style="width: 50px" />
                {{ item.title }}
              </td>
              <td class="align-middle">${{ item.price }}</td>
              <td class="align-middle">{{ item.quantity }}</td>
              <td class="align-middle">${{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-8" v-else>
        <h3>Your cart is empty</h3>
      </div>
      <div class="col-lg-4">
        
        <div class="card border-secondary mb-5">
          <div class="card-header bg-secondary border-0">
            <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3 pt-1">
              <h6 class="font-weight-medium">Subtotal</h6>
              <h6 class="font-weight-medium">${{ cartTotal }}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="font-weight-medium">Shipping</h6>
              <h6 class="font-weight-medium">$10</h6>
            </div>
          </div>
          <div class="card-footer border-secondary bg-transparent">
            <div class="d-flex justify-content-between mt-2">
              <h5 class="font-weight-bold">Total</h5>
              <h5 class="font-weight-bold">${{ cartTotal + 10 }}</h5>
            </div>
            <button class="btn btn-block btn-primary my-3 py-3">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return JSON.parse(localStorage.getItem("cart"));
    },
    cartTotal(){
        let cartTotal=0;
        for (const c of this.cartItems) {
            cartTotal+=c.price*c.quantity
        }
        return cartTotal;
    }
  },

  created() {
    console.log(this.cartTotal);
  },
};
</script>
