<template>
	<NuxtLink :to="to" class="flex items-center justify-center active-state bg-[#165dfc] hover:bg-[#155aed] transition-colors duration-[.25s] ease-out font-medium text-white px-4 py-2 rounded-full">
			<slot />
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to: string;
}

defineProps<Props>();
</script>
