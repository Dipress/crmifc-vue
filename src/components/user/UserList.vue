<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else class="content">
      <b-button class="create" variant="primary" v-b-modal.create-user>
        <b-icon-document-text></b-icon-document-text>
      </b-button>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <user-item
            :key="user.id"
            :user="user"
            v-for="user in users"
          ></user-item>
        </tbody>
      </table>
    </div>
    <b-modal title="Create User" :hide-footer="true" centered id="create-user"
      ><user-form type="create"></user-form>
    </b-modal>
    <b-modal title="Edit User" :hide-footer="true" centered id="edit-user"
      ><user-form :user="user"></user-form>
    </b-modal>
  </div>
</template>

<script>
  import UserForm from './UserForm.vue';
  import UserItem from './UserItem.vue';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'UserList',
    components: {
      UserForm,
      UserItem,
    },
    mounted() {
      this.getUsers();
    },
    computed: {
      ...mapGetters('user', ['users', 'isLoading', 'user']),
    },
    methods: {
      ...mapActions('user', ['getUsers']),
    },
  };
</script>

<style></style>
