<template>
  <div class="main">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <role-list></role-list>
  </div>
</template>

<script>
  import RoleList from '@/components/role/RoleList.vue';
  export default {
    data() {
      return {
        items: [
          {text: 'Dashboard', to: {name: 'home'}},
          {text: 'Roles', to: {name: 'roles'}, active: true},
        ],
      };
    },
    name: 'role',
    components: {
      RoleList,
    },
  };
</script>

<style>
  .main {
    margin-top: 1.2rem;
  }
</style>
