<template>
	<NuxtLink :to="to">
		<button
			class="flex items-center justify-center active-state w-full bg-[#165dfc] hover:bg-[#155aed] transition-colors duration-[.25s] ease-out font-medium text-white px-4 py-2 rounded-full"
		>
			<slot />
		</button>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to: string;
}

defineProps<Props>();
</script>
