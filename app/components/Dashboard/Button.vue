<template>
	<NuxtLink :to="to">
		<button
			class="flex gap-1 items-center justify-center w-full bg-[#165dfc] hover:bg-[#155aed] transition-colors duration-[.25s] font-medium text-white px-4 py-2 rounded-lg"
		>
			<Icon
				name="my-icon:refresh"
				class="size-4"
			/>
			<slot />
		</button>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to?: string;
}

defineProps<Props>();
</script>
