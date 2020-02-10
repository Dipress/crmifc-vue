<template>
  <div>
    <b-form
      v-if="type === 'create'"
      @submit.prevent="createRole"
      class="role-form"
    >
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          required
          placeholder="Enter role name"
          v-model="form.name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Create</b-button>
    </b-form>

    <b-form v-else @submit.prevent="updateRole" class="role-form">
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          required
          placeholder="Enter role name"
          v-model="form.name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="warning">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
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
    methods: {
      updateRole() {
        this.$store
          .dispatch('updateRole', {
            id: this.role.id,
            name: this.form.name,
          })
          .then(() => {
            this.error = null;
          })
          .catch(error => {
            this.error = error.response.data.message;
          })
          .finally(() => {
            if (!this.error) {
              this.$root.$bvModal.hide('edit-role');
            }
          });
      },
      createRole() {
        this.$store
          .dispatch('createRole', this.form.name)
          .then(() => {
            this.error = null;
          })
          .catch(error => {
            this.error = error.response.data.message;
          })
          .finally(() => {
            if (!this.error) {
              this.$root.$bvModal.hide('create-role');
            }
          });
      },
    },
  };
</script>
