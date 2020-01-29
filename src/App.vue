<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  body {
    background-color: #00aeff !important;
  }
</style>
