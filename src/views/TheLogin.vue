<template>
  <div class="container-fluid pt-5">
    <div class="text-center mb-4">
      <h2 class="section-title px-5">
        <span class="px-2">Login</span>
      </h2>
    </div>
    <div class="row px-xl-5">
      <div class="col-lg-7 mb-5">
        <div class="contact-form">
          <div id="success"></div>
          <form @submit.prevent="submitForm">
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
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    submitForm() {
      this.emailError = "";
      this.passwordError = "";

      if (!this.email) {
        this.emailError = "Email is required.";
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError = "Invalid email format.";
        return;
      }

      if (!this.password) {
        this.passwordError = "Password is required.";
        return;
      }
      if (this.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters long.";
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) ?? [];
      const isValidUser = users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (isValidUser) {
        const user = {
          email: this.email,
        };
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push({ path: "/shop" });
      } else {
        alert("Invalid email or password.");
      }
    },
  },
};
</script>
