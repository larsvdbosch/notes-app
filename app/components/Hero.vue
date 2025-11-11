<script lang="ts" setup>
interface Props {
  title: string
  description: string
  label: string
  to: string
  showButton?: boolean
}

withDefaults(defineProps<Props>(), {
  showButton: true,
})
</script>

<template>
  <div class="border-b border-[var(--color-border)] bg-[image:repeating-linear-gradient(315deg,_var(--color-pattern)_0,_var(--color-pattern)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
    <section class="container padding-section flex justify-center px-4">
      <div class="flex items-center text-[var(--color-text)] gap-4 flex-col">
        <h1 class="heading-hero max-w-3xl">
          {{ title }}
        </h1>
        <p class="paragraph-hero max-w-md">
          {{ description }}
        </p>
        <Button
          :to="to"
          variant="primary"
          :class="{ block: showButton === true, hidden: !showButton }"
        >
          {{ label }}
        </Button>
      </div>
    </section>
  </div>
</template>
