<script setup lang="ts">
const { removeNotes } = useNotes()
const isOpen = ref(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

const items = ref([{ name: 'Clear all', id: 1, action: removeNotes }, { name: 'Filter notes', id: 2 }])
</script>

<template>
  <div
    class="group"
    @click="toggleDropdown"
  >
    <button
      class="flex relative text-[var(--color-text)] items-center active-state cursor-default bg-[var(--color-background)] hover:bg-[var(--color-banner)] border border-[var(--color-border)] font-normal px-2 py-1 rounded-[4px] gap-1"
    >
      <Icon name="my-icon:menu-icon" />
      <span>Options</span>
    </button>
    <ul class="absolute mt-2 ">
      <NuxtLink
        v-for="item in items"
        :key="item.id"
        :class="{ hidden: !isOpen }"
        class="flex flex-col text-[var(--color-text)] mb-2 items-center cursor-default bg-[var(--color-background)] hover:bg-[var(--color-banner)] border border-[var(--color-border)] font-normal px-2 py-1 rounded-[4px]"
        @click="item.action"
      >
        {{ item.name }}
      </NuxtLink>
    </ul>
  </div>
</template>
