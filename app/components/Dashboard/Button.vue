<template>
	<NuxtLink :to="to">
		<button
			class="flex gap-1 items-center justify-center w-full bg-[#FF2C00] hover:bg-[#FF2C00] transition-colors duration-[.25s] font-medium text-white px-4 py-2 rounded-lg"
		>
			<NuxtImg
				src="/assets/svg/refresh.svg"
				alt="Logo"
				width="16"
				height="16"
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
