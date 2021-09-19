<template functional>
  <ul class="d-flex justify-content-center nav mb-2">
    <li class="nav-item">
      <router-link
        :to="{ name: 'about'}"
        data-testid="tab-main"
        data-toggle="tab"
        class="nav-link text-dark"
      >
        <span><b>about me.</b></span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        :to="{ name: 'main'}"
        data-toggle="tab"
        data-testid="tab-about"
        class="nav-link text-dark"
      >
        <span><b>cosmos.</b></span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
  .nav-item {
    padding: 10px 10px;
    margin: 10px 20px;
  }
  .nav-item:hover span {
    color: #da6d2e;
  }
  .nav {
    background-color: #000000;
  }
  li span {
    color: white;
    transition: 0.3s;
  }
  li b {
    font-size: 24px;
  }
</style>
