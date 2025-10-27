<template>
	<NuxtLink
		:to="to"
		class="flex p-2 rounded-lg hover:bg-gray-100 transition-colors duration-[.25s] ease-out items-center cursor-pointer"
	>
		<NuxtImg
			:src="`/assets/svg/${img}`"
			alt="Link Icon"
			width="24"
			height="24"
		/>
	</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
	to?: string;
	img: string;
}

defineProps<Props>();
</script>
