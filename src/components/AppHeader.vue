<template>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/welcome">Welcome</router-link>|
    <router-link to="/blog">Blog</router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
export default {
  name: "AppHeader",
  
};
</script>