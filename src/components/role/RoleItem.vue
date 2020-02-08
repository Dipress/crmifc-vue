<template>
  <tr>
    <td>{{ role.id }}</td>
    <td>{{ role.name }}</td>
    <td>{{ moment(role.created_at).format('DD.MM.YYYY') }}</td>
    <td>{{ moment(role.updated_at).format('DD.MM.YYYY') }}</td>
    <td>
      <b-button variant="warning" @click="setRole" v-b-modal.edit-role>
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button variant="danger" @click="deleteRole">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </td>
  </tr>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'RoleItem',
    props: ['role'],
    methods: {
      moment() {
        return moment();
      },
      setRole() {
        this.$store.dispatch('setRole', this.role.id);
      },

      deleteRole() {
        this.$store.dispatch('deleteRole', this.role.id).catch(error => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>
