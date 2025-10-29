<template>
	<NuxtLink
		:to="to"
		class="flex p-2 rounded-lg active-state hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
	>
		<Icon
			:name="`my-icon:${icon}`"
			class="text-[var(--color-text)] size-5"
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
