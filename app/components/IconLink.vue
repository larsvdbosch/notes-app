<script lang="ts" setup>
interface Props {
  to?: string
  icon: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    :aria-label="label"
    class="flex p-2 rounded-lg active-state hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
  >
    <Icon
      :name="`my-icon:${icon}`"
      class="text-[var(--color-text)] size-5"
      aria-hidden="true"
    />
  </NuxtLink>
</template>
