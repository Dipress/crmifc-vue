<template>
  <div>
    <nav-bar></nav-bar>
    <h1>This is a Home page</h1>
  </div>
</template>

<script>
  import NavBar from '@/components/UI/NavBar.vue';

  export default {
    name: 'home',
    components: {
      NavBar,
    },
  };
</script>
