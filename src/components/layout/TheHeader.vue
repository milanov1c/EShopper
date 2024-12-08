<template>
  <div class="container-fluid mb-5 mx-auto">
    <div class="row border-top px-xl-5 mx-auto">
      <div class="col-lg-9 mx-auto">
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0"
        >
          <a href="" class="text-decoration-none d-block d-lg-none">
            <h1 class="m-0 display-5 font-weight-semi-bold">
              <span class="text-primary font-weight-bold border px-3 mr-1"
                >E</span
              >Shopper
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto py-0">
              <router-link to="/" class="nav-item nav-link">Home</router-link>
              <router-link to="/shop" class="nav-item nav-link" v-if="isLogged"
                >Shop</router-link
              >
              <router-link to="/contact" class="nav-item nav-link" v-if="isLogged"
                >Contact</router-link
              >
            </div>
            <div class="navbar-nav ml-auto py-0">
              <router-link to="/login" class="nav-item nav-link" v-if="!isLogged"
                >Login</router-link
              >
              <router-link to="/register" class="nav-item nav-link" v-if="!isLogged"
                >Register</router-link
              >
              <a href="" @click="logout" v-if="isLogged" class="nav-item nav-link">Logout</a>

              <router-link to="/cart" class="nav-item nav-link" v-if="isLogged"
                >Cart</router-link
              >
            </div>
          </div>
        </nav>
        <the-header-title></the-header-title>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeaderTitle from "./TheHeaderTitle.vue";
export default {
  components: {
    TheHeaderTitle,
  },
  data() {
    return {
      carouselItem: {
        image: require("../../assets/img/carousel-1.jpg"),
        subtitle: "10% off your first order",
        title: "Fashionable Items",
      },
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/login" });
    },
  },
  computed:{
    isLogged() {
      return !!localStorage.getItem("user");
    },
  },
  watch: {
  isLogged(newVal, oldVal) {
    if (!newVal) {
      this.$router.push("/login");
    }
    else if(!oldVal){
      this.$router.push("/shop")
    }
  }
}

  
};
</script>
<style scoped>
</style>