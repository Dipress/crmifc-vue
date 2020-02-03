<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from '@/components/UI/MainLayout.vue';
import DashboardLayout from '@/components/UI/DashboardLayout.vue';

export default {
  components: {
    MainLayout,
    DashboardLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout';
    },
  },
};
</script>

<style></style>
