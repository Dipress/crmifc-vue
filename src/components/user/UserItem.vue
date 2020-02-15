<template>
  <tr>
    <td>user id</td>
    <td>username</td>
    <td>email</td>
    <td>role name</td>
    <td>created at</td>
    <td>updated at</td>
    <td>
      <b-button variant="warning" @click="useUser" v-b-modal.edit-user>
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button variant="danger" @click="removeUser">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'UserItem',
    methods: {
      useUser() {
        window.console.log('set User event');
      },
      removeUser() {
        window.console.log('remove User event');
      },
    },
  };
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>
