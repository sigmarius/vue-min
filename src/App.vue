<template>
  <navbar-menu></navbar-menu>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
    components: {NavbarMenu}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 20px;
}
</style>
