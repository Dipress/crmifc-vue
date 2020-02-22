<template>
  <div>
    <b-form
      v-if="type === 'create'"
      @submit.prevent="newCategory"
      class="category-form"
    >
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          placeholder="Enter category name"
          v-model="form.name"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Create</b-button>
    </b-form>
    <b-form v-else @submit.prevent="editCategory" class="category-form">
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          placeholder="Enter category name"
          v-model="form.name"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="warning">Edit</b-button>
    </b-form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'CategoryForm',
    props: ['category', 'type'],
    data() {
      return {
        form: {
          name: this.category ? this.category.name : '',
        },
        error: null,
      };
    },
    computed: {
      ...mapGetters(['apiError']),
    },
    methods: {
      async newCategory() {
        this.error = null;

        await this.$store.dispatch('category/createCategory', this.form.name);

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }

        this.$root.$bvModal.hide('create-category');
      },
      async editCategory() {
        this.error = null;

        await this.$store.dispatch('category/updateCategory', {
          id: this.category.id,
          name: this.form.name,
        });

        if (this.apiError) {
          this.error = this.apiError;
          return;
        }

        this.$root.$bvModal.hide('edit-category');
      },
    },
  };
</script>
