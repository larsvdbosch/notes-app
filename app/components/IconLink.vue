<template>
	<NuxtLink
		:to="to"
		class="flex  p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
	>
		<Icon
			:name="`my-icon:${icon}`"
			class="text-[var(--color-text)]"
		/>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to?: string;
	icon: string;
}

defineProps<Props>();
</script>
