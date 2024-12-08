<template>
  <div class="container-fluid pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2>
      <p class="text-center mb-5">Please give us information about our products quality</p>
    </div>
    <div class="row px-xl-5">
      <div class="col-lg-7 mb-5">
        <div class="contact-form">
          <div id="success"></div>
          <form name="sentMessage" id="contactForm" @submit.prevent="handleSubmit">
            <div class="control-group">
              <input type="text" class="form-control" v-model="form.name" id="name" placeholder="Your Name" required />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group">
              <input type="email" class="form-control" v-model="form.email" id="email" placeholder="Your Email" required />
              <p class="help-block text-danger"></p>
            </div>
            <div class="control-group">
              <textarea class="form-control" rows="6" v-model="form.message" id="message" placeholder="Message" required></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <the-custom-input
              v-model="form.quality"
              id="quality"
              label="Product Quality"
              errorMessage="Please select a quality"
            ></the-custom-input>
            <div>
              <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-5 mb-5">
      </div>
    </div>
  </div>
</template>

<script>
import TheCustomInput from '../components/layout/TheCustomInput.vue';

export default {
  components: {
    TheCustomInput
  },
  data() {
    return {
      form: {
        quality: '',
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form.quality);
      let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
      reviews.push(this.form);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      this.form = {
        quality: '',
        name: '',
        email: '',
        message: ''
      };
      alert('Thank you for your feedback!');
    }
  }
};
</script>
