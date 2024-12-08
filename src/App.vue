<template>
  <div>
    <the-top-bar></the-top-bar>
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import './assets/css/style.css'
import TheHeader from './components/layout/TheHeader.vue'
import TheTopBar from './components/layout/TheTopBar.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default{
  components:{
    TheHeader, TheTopBar, TheFooter
  },
  created(){
    this.$store.dispatch("shop/loadProducts");
    this.$store.dispatch("shop/loadCategories");
  }
}


</script>

<style>

</style>
