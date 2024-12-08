<template>
  <!-- Shop Start -->
  <div class="container-fluid pt-5">
    <div class="row px-xl-5">
      <!-- Shop Product Start -->
      <div class="col-lg-9 col-md-12 mx-auto">
        <div class="row pb-3">
          <div class="col-12 pb-1">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <form @submit.prevent="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by name"
                    v-model="search"
                  />
                  <div class="input-group-append">
                    
                  </div>
                </div>
              </form>
              
            </div>
          </div>
          <the-product
            v-for="p in filteredProducts"
            :key="p.id"
            :images="p.images"
            :title="p.title"
            :price="p.price"
            :prodId="p.id"
          ></the-product>
        </div>
      </div>
      <!-- Shop Product End -->
    </div>
  </div>
  <!-- Shop End -->
</template>

<script>
import TheProduct from "../components/layout/TheProduct.vue";

export default {
  components: {
    TheProduct,
  },
  data() {
    return {
      search: "", 
    };
  },
  computed: {
    products() {
      return this.$store.getters["shop/getProducts"];
    },
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
