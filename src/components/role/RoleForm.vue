<template>
  <div>
    <b-form
      v-if="type === 'create'"
      @submit.prevent="newRole"
      class="role-form"
    >
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          placeholder="Enter role name"
          v-model="form.name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Create</b-button>
    </b-form>

    <b-form v-else @submit.prevent="editRole" class="role-form">
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          placeholder="Enter role name"
          v-model="form.name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="warning">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'RoleForm',
    props: ['role', 'type'],
    data() {
      return {
        form: {
          name: this.role ? this.role.name : '',
        },
        error: null,
      };
    },
    computed: {
      ...mapGetters(['apiError']),
    },
    methods: {
      async editRole() {
        this.error = null;

        await this.$store.dispatch('role/updateRole', {
          id: this.role.id,
          name: this.form.name,
        });

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }

        this.$root.$bvModal.hide('edit-role');
      },
      async newRole() {
        this.error = null;

        await this.$store.dispatch('role/createRole', this.form.name);

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }

        this.$root.$bvModal.hide('create-role');
      },
    },
  };
</script>
