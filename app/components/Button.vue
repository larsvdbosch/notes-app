<template>
	<NuxtLink to="/">
		<button
			class="flex gap-1 items-center justify-center w-full bg-secondary border-secondary-border border hover:bg-[#00d07a] transition duration-150 ease-in-out font-medium text-secondary-dark px-4 py-2 rounded-lg"
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

<script setup lang="ts"></script>
