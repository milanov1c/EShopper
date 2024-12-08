<template>
  <div class="container-fluid py-5" v-if="product">
    <div class="row px-xl-5">
      <div class="col-lg-5 pb-5">
        <div id="product-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner border">
            <div
              class="carousel-item"
              v-for="(i, index) in image"
              :key="index"
              :class="{ active: index === 0 }"
            >
              <img class="w-100 h-100" :src="i" alt="Image" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#product-carousel"
            data-slide="prev"
          >
            <i class="fa fa-2x fa-angle-left text-dark"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#product-carousel"
            data-slide="next"
          >
            <i class="fa fa-2x fa-angle-right text-dark"></i>
          </a>
        </div>
      </div>

      <div class="col-lg-7 pb-5">
        <h3 class="font-weight-semi-bold">{{ title }}</h3>
        <h3 class="font-weight-semi-bold mb-4">${{ price }}.00</h3>
        <p class="mb-4">{{ description }}</p>

        <div class="d-flex align-items-center mb-4 pt-2">
          <div class="input-group quantity mr-3" style="width: 130px">
            <div class="input-group-btn">
              <button
                class="btn btn-primary btn-minus"
                @click="decreaseQuantity"
              >
                <i class="fa fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              class="form-control bg-secondary text-center"
              :value="quantity"
              readonly
            />
            <div class="input-group-btn">
              <button
                class="btn btn-primary btn-plus"
                @click="increaseQuantity"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <button class="btn btn-primary px-3" @click="addToCart">
            <i class="fa fa-shopping-cart mr-1"></i> Add To Cart
          </button>
        </div>

        <div class="d-flex pt-2">
          <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
          <div class="d-inline-flex">
            <a class="text-dark px-2" href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-dark px-2" href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-dark px-2" href="">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="text-dark px-2" href="">
              <i class="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      quantity: 1,
    };
  },
  computed: {
    title() {
      return this.product ? this.product.title : "";
    },
    price() {
      return this.product ? this.product.price : 0;
    },
    image() {
      return this.product && this.product.images ? this.product.images : [];
    },
    description() {
      return this.product ? this.product.description : "";
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("shop/loadSingleProduct", id).then(() => {
      this.product = this.$store.getters["shop/getProduct"];
    });
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      let cart = localStorage.getItem("cart");

      cart = JSON.parse(cart) ?? [];

      const productToCart = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        quantity: this.quantity
      };

      const productInCart = cart.find((item) => item.id === productToCart.id);

      if (productInCart) {
        productInCart.quantity++;
      } else {
        cart.push(productToCart);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    },
  },
};
</script>
