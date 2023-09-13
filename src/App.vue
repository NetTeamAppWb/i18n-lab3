<script setup>
import Home from "@/components/HomeNetTeam.vue";
</script>

<template>
  <header>
    {{$t('greet',{user:'Jesus'})}}
  </header>

  <nav>
    <router-link to="/">{{$t("homepage")}}</router-link>
    <router-link to="/home">NetTeam</router-link>
    <router-link to="/register">{{$t("registernet")}}</router-link>
    <router-link to="/users">{{$t("users")}}</router-link>
  </nav>

  <main>
    <router-view></router-view>
  </main>

</template>

<style scoped>
header {
  line-height: 10;
  font-size: 30px;
}

</style>
