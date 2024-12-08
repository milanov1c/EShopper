<template>
    <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Our {{this.$route.name}} page</h1>
            <div class="d-inline-flex">
                <p class="m-0"><router-link to="/">Home</router-link></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0 text-capitalize">{{this.$route.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>