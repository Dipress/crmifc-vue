<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.username }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.role.name }}</td>
    <td>{{ moment(user.created_at).format('DD.MM.YYYY') }}</td>
    <td>{{ moment(user.updated_at).format('DD.MM.YYYY') }}</td>
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
  import moment from 'moment';
  import {mapActions} from 'vuex';

  export default {
    name: 'UserItem',
    props: ['user'],
    methods: {
      moment() {
        return moment();
      },
      ...mapActions('user', ['setUser', 'deleteUser']),
      useUser() {
        this.setUser(this.user.id);
      },
      removeUser() {
        this.deleteUser(this.user.id);
      },
    },
  };
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>
