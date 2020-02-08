<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link class="navbar-brand" to="/">Crmifc</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-if="isAuth" class="nav-link" to="/home"
          >Home</router-link
        >
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button v-if="isAuth" @click="logout" variant="light"
          >Logout</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters({
        isAuth: 'isAuth',
      }),
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>
