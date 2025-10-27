<template>
	<NuxtLink
		:to="to"
		class="flex p-2 rounded-lg hover:bg-gray-100 transition-colors duration-[.25s] ease-out items-center"
	>
		<span class="text-sm text-black font-normal">{{ name }}</span>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to: string;
	name: string;
}

defineProps<Props>();
</script>
