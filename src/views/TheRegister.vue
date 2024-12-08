<template>
  <div class="container-fluid pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-5">
        <span class="px-2">Contact For Any Queries</span>
      </h2>
    </div>
    <div class="row px-xl-5">
      <div class="col-lg-7 mb-5">
        <div class="contact-form">
          <div id="success"></div>
          <form @submit.prevent="submitForm">
            <!-- First Name -->
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                class="form-control"
                v-model="firstName"
                placeholder="Enter your first name"
                required
              />
              <small v-if="firstNameError" class="text-danger">{{
                firstNameError
              }}</small>
            </div>

            <!-- Last Name -->
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                class="form-control"
                v-model="lastName"
                placeholder="Enter your last name"
                required
              />
              <small v-if="lastNameError" class="text-danger">{{
                lastNameError
              }}</small>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                v-model="email"
                placeholder="Enter your email"
                required
              />
              <small v-if="emailError" class="text-danger">{{
                emailError
              }}</small>
            </div>

            <!-- Password -->
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="password"
                placeholder="Enter your password"
                required
              />
              <small v-if="passwordError" class="text-danger">{{
                passwordError
              }}</small>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
      <div class="col-lg-5 mb-5">
        <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
        <p>
          Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo
          amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita
          ipsum justo sed.
        </p>
        <div class="d-flex flex-column mb-3">
          <h5 class="font-weight-semi-bold mb-3">Store 1</h5>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street,
            New York, USA
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope text-primary mr-3"></i>info@example.com
          </p>
          <p class="mb-2">
            <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
          </p>
        </div>
        <div class="d-flex flex-column">
          <h5 class="font-weight-semi-bold mb-3">Store 2</h5>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street,
            New York, USA
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope text-primary mr-3"></i>info@example.com
          </p>
          <p class="mb-0">
            <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {},
    };
  },
  computed: {
    firstNameError() {
      if (!this.firstName) {
        return "First name is required.";
      }
      if (this.firstName.length < 2) {
        return "First name must be at least 2 characters long.";
      }
      return null;
    },
    lastNameError() {
      if (!this.lastName) {
        return "Last name is required.";
      }
      if (this.lastName.length < 2) {
        return "Last name must be at least 2 characters long.";
      }
      return null;
    },
    emailError() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        return "Email is required.";
      }
      if (!emailRegex.test(this.email)) {
        return "Invalid email format.";
      }
      return null;
    },
    passwordError() {
      if (!this.password) {
        return "Password is required.";
      }
      if (this.password.length < 6) {
        return "Password must be at least 6 characters long.";
      }
      return null;
    },
  },
  methods: {
    submitForm() {
      if (
        this.firstNameError ||
        this.lastNameError ||
        this.emailError ||
        this.passwordError
      ) {
        return;
      }

      let users=JSON.parse(localStorage.getItem("users"))??[];

      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>