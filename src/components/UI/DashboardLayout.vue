<template>
  <div class="dashboard">
    <nav-bar></nav-bar>
    <b-container fluid>
      <b-row>
        <b-col md="2" lg="2" class="px-0">
          <side-bar></side-bar>
        </b-col>
        <b-col md="9" lg="10" sm="auto">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style></style>
