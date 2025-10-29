<template>
	<NuxtLink
		class="flex items-center gap-1 cursor-pointer"
		:to="to"
	>
		<Icon
			name="my-icon:halloween"
			class="animate-bounce size-8"
		/>
		<span class="text-3xl font-semibold tracking-tighter text-[var(--color-text)]">
			Notably
		</span>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to?: string;
}

defineProps<Props>();
</script>
