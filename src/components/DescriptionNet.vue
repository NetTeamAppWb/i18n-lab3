<script setup>

import WelcomeItem from "@/components/WelcomeItem.vue";
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import CommunityIcon from "@/components/icons/IconCommunity.vue";
import SupportIcon from "@/components/icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    NetTeam It offers them a wide variety of options that they might like.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Connect with your gastronomic community and like-minded entrepreneurs. We amplify communication between foodies and culinary entrepreneurs.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support NetTeam</template>

    Your privacy is our priority. We are committed to protecting your personal data and providing you with communication channels to report any incident.
  </WelcomeItem>
</template>

<style scoped>

</style>