<template>
  <div>
    <p>Loading...</p>
    <div class="content">
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
          <user-item></user-item>
        </tbody>
      </table>
    </div>
    <b-modal title="Create User" :hide-footer="true" centered id="create-user"
      ><user-form type="create"></user-form>
    </b-modal>
    <b-modal title="Edit User" :hide-footer="true" centered id="edit-user"
      ><user-form></user-form>
    </b-modal>
  </div>
</template>

<script>
  import UserForm from './UserForm.vue';
  import UserItem from './UserItem.vue';

  export default {
    name: 'UserList',
    components: {
      UserForm,
      UserItem,
    },
  };
</script>

<style></style>
