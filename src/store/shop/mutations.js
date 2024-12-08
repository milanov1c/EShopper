export default {
    setProducts(state, productsList) {
      state.productsList = productsList;
    },
    setProduct(state, product){
        state.product=product;
    },
    setCategories(state, categoriesList){
      state.categoriesList=categoriesList;
    }
  };
  