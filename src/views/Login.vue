<template>
  <div class="login">
    <b-container class="fluid">
      <b-row>
        <b-col offset-md="3" md="6" lg="6" xs="12">
          <b-form @submit.prevent="login" class="login-form">
            <h2>Login</h2>
            <b-form-group label="Email address:">
              <b-form-input
                type="email"
                required
                placeholder="Enter email"
                v-model="form.email"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Password:">
              <b-form-input
                type="password"
                required
                placeholder="Enter password"
                v-model="form.password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {},
    data: function() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      login: function() {
        window.console.log('submit');
      },
    },
  };
</script>

<style scoped>
  .login {
    margin-top: 12%;
  }

  .login-form {
    margin: 0 auto;
    padding: 8%;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .login-form h2 {
    text-align: center;
  }
</style>
