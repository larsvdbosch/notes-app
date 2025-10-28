<template>
	<NuxtLink :to="to">
		<button
			class="flex items-center justify-center w-full bg-[#FF2C00] hover:bg-[#ec2800] transition-colors duration-[.25s] ease-out font-medium text-white px-4 py-2 rounded-full"
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
