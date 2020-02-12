<template>
  <tr>
    <td>{{ role.id }}</td>
    <td>{{ role.name }}</td>
    <td>{{ moment(role.created_at).format('DD.MM.YYYY') }}</td>
    <td>{{ moment(role.updated_at).format('DD.MM.YYYY') }}</td>
    <td>
      <b-button variant="warning" @click="useRole" v-b-modal.edit-role>
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button variant="danger" @click="removeRole">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </td>
  </tr>
</template>

<script>
  import moment from 'moment';
  import {mapActions} from 'vuex';

  export default {
    name: 'RoleItem',
    props: ['role'],
    methods: {
      moment() {
        return moment();
      },
      ...mapActions('role', ['setRole', 'deleteRole']),
      useRole() {
        this.setRole(this.role.id);
      },
      removeRole() {
        this.deleteRole(this.role.id);
      },
    },
  };
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>
