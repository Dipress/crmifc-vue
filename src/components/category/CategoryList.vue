<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <div v-else class="content">
      <b-button class="create" variant="primary" v-b-modal.create-category>
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
          <category-item
            :key="category.id"
            :category="category"
            v-for="category in categories"
          >
          </category-item>
        </tbody>
      </table>
    </div>
    <b-modal
      title="Create Category"
      :hide-footer="true"
      centered
      id="create-category"
    >
      <category-form type="create">
        <category-form type="create"></category-form>
      </category-form>
    </b-modal>
    <b-modal
      title="Edit Category"
      :hide-footer="true"
      centered
      id="edit-category"
    >
      <category-form :category="category"></category-form>
    </b-modal>
  </div>
</template>

<script>
  import CategoryItem from './CategoryItem.vue';
  import CategoryForm from './CategoryForm.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'CategoryList',
    components: {
      CategoryItem,
      CategoryForm,
    },
    computed: {
      ...mapGetters('category', ['categories', 'isLoading', 'category']),
    },
  };
</script>

<style scoped>
  button.create {
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>
