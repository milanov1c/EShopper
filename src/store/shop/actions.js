import axios from "axios";

export default{
    async loadProducts(context){
        const response=await axios.get('http://localhost:3001/api/v1/products');
        context.commit("setProducts",response.data);
    },
    async loadSingleProduct(context,id){
        const response= await axios.get('http://localhost:3001/api/v1/products/'+id);
        context.commit("setProduct", response.data);
    },
   async loadCategories(context){
       const response=await axios.get('http://localhost:3001/api/v1/categories');
       context.commit("setCategories",response.data);
   }
}