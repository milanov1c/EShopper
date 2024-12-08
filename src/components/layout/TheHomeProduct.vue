<template>
    <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div class="card product-item border-0 mb-4">
            <div
              class="card-header product-img position-relative overflow-hidden bg-transparent border p-0"
            >
              <img class="img-fluid w-100" :src="images[0]" alt="" />
            </div>
            <div
              class="card-body border-left border-right text-center p-0 pt-4 pb-3"
            >
              <h6 class="text-truncate mb-3">
                {{title}}
              </h6>
              <div class="d-flex justify-content-center">
                <h6>${{price}}.00</h6>
              </div>
            </div>
            <div
              class="card-footer d-flex justify-content-between bg-light border"
            >
              <router-link  :to="{name:'product', params:{id:prodId}}" class="btn btn-sm text-dark p-0"
                ><i class="fas fa-eye text-primary mr-1"></i>View Detail</router-link
              >
              
            </div>
          </div>
        </div>
</template>
<script>
export default {
    props:{
        images:{
            type:Array
        },
        price:{
            type:Number
        },
        title:{
            type:String
        },
        prodId:{
            type:Number
        }
    }
}
</script>