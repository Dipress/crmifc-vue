<template>
  <div class="main">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <category-list></category-list>
  </div>
</template>

<script>
  import CategoryList from '@/components/category/CategoryList.vue'

  export default {
    name: 'Category',
    components: {
      CategoryList,
    },
    data() {
      return {
        items: [
          {text: 'Dashboard', to: {name: 'home'}},
          {text: 'Categories', to: {name: 'categories'}, active: true},
        ],
      };
    },
  };
</script>

<style scoped>
  .main {
    margin-top: 1.2rem;
  }
</style>
