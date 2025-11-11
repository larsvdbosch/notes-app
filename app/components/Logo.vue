<script lang="ts" setup>
const router = useRouter()

function backTo() {
  router.push('/')
}
</script>

<template>
  <NuxtLink
    class="flex items-center gap-1 cursor-pointer"
    @click="backTo"
  >
    <Icon
      name="my-icon:halloween"
      class="animate-bounce size-8"
    />
    <span class="text-3xl font-semibold tracking-tighter text-orange-500">
      Notably
    </span>
  </NuxtLink>
</template>
