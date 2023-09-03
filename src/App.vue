<script setup>
import WelcomeNetTeam from "@/components/WelcomeNetTeam.vue";
import DescriptionNet from "@/components/DescriptionNet.vue";
</script>

<template>
  <header>
    <img alt="NetTeamLogo" class="logo" src="./assets/logoNetTeam.png" width="340" height="210" />

    <div class="wrapper">
      <WelcomeNetTeam msg="Hello user" />
    </div>
  </header>

  <main>
    <DescriptionNet />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
