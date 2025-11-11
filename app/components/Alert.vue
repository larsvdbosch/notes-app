<script lang="ts" setup>
interface Props {
  message: string
  level?: 'info' | 'success' | 'warning' | 'error'
}

withDefaults(defineProps<Props>(), {
  level: 'success',
})
</script>

<template>
  <div
    class="text-sm font-medium p-2 rounded-lg" :class="[{ 'text-blue-600 bg-blue-100': level === 'info',
                                                          'text-green-600 bg-green-100': level === 'success',
                                                          'text-amber-600 bg-amber-100': level === 'warning',
                                                          'text-red-600 bg-red-100': level === 'error',
    }]"
  >
    <span>
      {{ message }}
    </span>
  </div>
</template>
