<script setup>
import Home from "@/components/HomeNetTeam.vue";
</script>

<template>
  <header>
    {{$t('greet',{user:'Jesus'})}}
  </header>

  <main>
    <Home :register="[{}]"/>
  </main>
</template>

<style scoped>
header {
  line-height: 10;
  font-size: 30px;
}

</style>
