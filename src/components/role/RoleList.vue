<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else class="content">
      <b-button class="create" variant="primary" v-b-modal.create-role>
        <b-icon-document-text></b-icon-document-text>
      </b-button>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <role-item
            :key="role.id"
            :role="role"
            v-for="role in roles"
          ></role-item>
        </tbody>
      </table>
    </div>
    <b-modal title="Create Role" :hide-footer="true" centered id="create-role">
      <role-form type="create"></role-form>
    </b-modal>
    <b-modal title="Edit Role" :hide-footer="true" centered id="edit-role">
      <role-form :role="role"></role-form>
    </b-modal>
  </div>
</template>

<script>
  import RoleItem from './RoleItem.vue';
  import RoleForm from './RoleForm.vue';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'RoleList',
    components: {
      RoleItem,
      RoleForm,
    },
    mounted() {
      this.getRoles();
    },
    computed: {
      ...mapGetters('role', ['roles', 'isLoading', 'role']),
    },
    methods: {
      ...mapActions('role', ['getRoles']),
    },
  };
</script>

<style>
  button.create {
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>
