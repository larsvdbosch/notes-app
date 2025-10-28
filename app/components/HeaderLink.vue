<template>
	<NuxtLink
		:to="to"
		class="flex p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
	>
		<span class="text-base text-[var(--color-text)] font-normal">{{ name }}</span>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to: string;
	name: string;
}

defineProps<Props>();
</script>
