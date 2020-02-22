<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td>{{ moment(category.created_at).format('DD.MM.YYYY') }}</td>
    <td>{{ moment(category.updated_at).format('DD.MM.YYYY') }}</td>
    <td>
      <b-button variant="warning" @click="useCategory" v-b-modal.edit-category>
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button variant="danger" @click="removeCategory">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </td>
  </tr>
</template>

<script>
  import moment from 'moment';
  import {mapActions} from 'vuex';

  export default {
    name: 'CategoryItem',
    props: ['category'],
    methods: {
      moment() {
        return moment();
      },
      ...mapActions('category', ['setCategory', 'deleteCategory']),
      useCategory() {
        this.setCategory(this.category.id);
      },
      removeCategory() {
        this.deleteCategory(this.category.id);
      },
    },
  };
</script>

<style scoped>
  button {
    margin-right: 5px;
  }
</style>
