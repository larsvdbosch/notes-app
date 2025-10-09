<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { toggle } = toggleSidebar();
</script>

<template>
	<section class="bg-white flex fixed top-0 h-16 z-50 w-full border-border-color border-b">
		<header
			class="p-4 flex justify-between items-center w-full"
		>
			<NuxtLink
				to="/"
				class="flex gap-1 items-center"
			>
				<NuxtImg
					src="/assets/svg/logo.svg"
					alt="Logo"
					width="32"
					height="32"
				/>
				<span class="text-2xl font-medium tracking-tight">Notably</span>
			</NuxtLink>
			<div class="flex gap-8 items-center text-[#0C0D0E] text-sm">
				<a
					href="https://github.com/larsvdbosch"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="hover:text-gray-600 transition-colors duration-300 ease-in-out">Github</span>
				</a>
				<a
					href="https://larsvandenbosch.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="hover:text-gray-600 transition-colors duration-300 ease-in-out">My portfolio</span>
				</a>
			</div>
		</header>
		<section
			class="bg-white fixed top-16 h-16 z-50 w-full border-border-color border-b p-4"
		>
			<header class="flex justify-between items-center">
				<button
					class="flex lg:hidden gap-1 items-center text-sm text-[#0C0D0E]"
					@click="toggle"
				>
					<NuxtImg
						src="/assets/svg/menu.svg"
						alt="menu-icon"
						width="24"
						height="24"
					/>
					<span>Menu</span>
				</button>
				<FilterDropdown filter="Clear all" />
			</header>
		</section>
	</section>
</template>
