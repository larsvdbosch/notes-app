<script lang="ts" setup>
const { initDarkmode } = useDarkmode()

onMounted(() => {
  initDarkmode()
})
</script>

<template>
  <div class="antialiased">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
