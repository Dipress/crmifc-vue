<template>
  <div class="main">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <user-list></user-list>
  </div>
</template>

<script>
  import UserList from '@/components/user/UserList';

  export default {
    name: 'user',
    components: {
      UserList,
    },
    data() {
      return {
        items: [
          {text: 'Dashboard', to: {name: 'home'}},
          {text: 'Users', to: {name: 'users'}, active: true},
        ],
      };
    },
  };
</script>

<style></style>
