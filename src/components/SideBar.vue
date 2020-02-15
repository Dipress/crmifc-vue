<template>
  <nav class="sidebar bg-light">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            <b-icon-bell-fill></b-icon-bell-fill>
            Vigiles
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">
            <b-icon-book-half-fill></b-icon-book-half-fill>
            Wiki
          </a>
        </li>
      </ul>
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>Admin panel</span>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/users">
            <b-icon-people-fill></b-icon-people-fill>
            Users
          </router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/roles">
            <b-icon-cone-striped></b-icon-cone-striped>
            Roles
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'SideBar',
  };
</script>

<style>
  .sidebar {
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  }

  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover,
  .sidebar .nav-link.active {
    color: inherit;
  }

  .sidebar-heading {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
</style>
