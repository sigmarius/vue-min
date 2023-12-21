<template>
  <div class="navbar">
    <div class="navbar__logo" @click="$router.push('/')">Mini Vue3</div>
    <div class="navbar__btns">
      <ui-button @click="$router.push('/posts')">Posts</ui-button>
      <ui-button @click="$router.push('/store')">Store Posts</ui-button>
      <ui-button @click="$router.push('/composition')">Composition Posts</ui-button>
      <ui-button @click="$router.push('/about')">About</ui-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;
  background: teal;
  box-shadow: 2px 2px 4px #dddddd;
}

.navbar__btns .btn {
  font-size: 16px;
  color: white;
}

.navbar__logo {
  color: white;
  cursor: pointer;
}

.navbar__btns .btn:hover,
.navbar__btns .btn:focus,
.navbar__logo:hover,
.navbar__logo:focus {
  color: wheat;
  transition: all 0.3s ease;
}
</style>
