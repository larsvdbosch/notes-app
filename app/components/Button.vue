<script lang="ts" setup>
interface Props {
  to: string
  variant: 'primary' | 'secondary'
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-center justify-center active-state transition-colors duration-[.25s] ease-out font-medium text-white px-4 py-2 rounded-full" :class="[
      { 'bg-primary hover:bg-[#155aed]': variant === 'primary' }, // primary button
      { 'bg-[#FF2C00] hover:bg-[#f42900]': variant === 'secondary' }, // secondary button
    ]"
  >
    <slot />
  </NuxtLink>
</template>
