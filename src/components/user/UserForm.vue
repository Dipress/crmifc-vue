<template>
  <b-form v-if="type === 'create'" @submit.prevent="newUser" class="user-form">
    <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
    <b-form-group label="Username">
      <b-form-input
        type="text"
        placeholder="Enter user name"
        v-model="form.username"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Email">
      <b-form-input
        type="email"
        placeholder="Enter user email"
        v-model="form.email"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Password">
      <b-form-input
        type="password"
        placeholder="Enter user password"
        v-model="form.password"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Select Role">
      <b-form-select v-model="form.role_id">
        <b-form-select-option :value="null" disabled
          >Please select an role</b-form-select-option
        >
        <b-form-select-option
          v-for="role in roles"
          :value="role.id"
          :key="role.id"
          >{{ role.name }}</b-form-select-option
        >
      </b-form-select>
      <p>Selected: {{ form.role_id }}</p>
    </b-form-group>
    <b-button type="submit" variant="success">Create</b-button>
  </b-form>
  <b-form v-else @submit.prevent="editUser" class="user-form">
    <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
    <b-form-group label="Username">
      <b-form-input
        type="text"
        placeholder="Enter user name"
        v-model="form.username"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Email">
      <b-form-input
        type="email"
        placeholder="Enter user email"
        v-model="form.email"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Password">
      <b-form-input
        type="password"
        placeholder="Enter user password"
        v-model="form.password"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Select Role">
      <b-form-select v-model="form.role_id">
        <b-form-select-option
          v-for="role in roles"
          :value="role.id"
          :key="role.id"
          >{{ role.name }}</b-form-select-option
        >
      </b-form-select>
      <p>Selected: {{ form.role_id }}</p>
    </b-form-group>
    <b-button type="submit" variant="warning">Edit</b-button>
  </b-form>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'UserForm',
    props: ['user', 'type'],
    data() {
      return {
        form: {
          username: this.user ? this.user.username : null,
          email: this.user ? this.user.email : null,
          password: this.user ? this.user.password : null,
          role_id: this.user ? this.user.role.id : null,
        },
        error: null,
      };
    },
    mounted() {
      this.getRoles();
    },
    computed: {
      ...mapGetters('role', ['roles']),
      ...mapGetters(['apiError']),
    },

    methods: {
      ...mapActions('role', ['getRoles']),

      async newUser() {
        this.error = null;

        await this.$store.dispatch('user/createUser', this.form);

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }
        window.console.log('newUser:', this.form);

        this.$root.$bvModal.hide('create-user');
      },
      async editUser() {
        this.error = null;

        await this.$store.dispatch('user/updateUser', {
          id: this.user.id,
          ...this.form,
        });

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }
        this.$root.$bvModal.hide('edit-user');
      },
    },
  };
</script>
