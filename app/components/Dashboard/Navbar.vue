<template>
	<section class="bg-white flex fixed top-8 h-16 z-50 w-full border-border-color border-b">
		<header
			class="p-4 flex justify-between items-center w-full"
		>
			<Logo to="/" />
			<Search />
			<div class="flex gap-2 items-center text-[#0C0D0E] text-sm">
				<HeaderLink
					to="https://github.com/larsvdbosch"
					name="Github"
					target="_blank"
					rel="noopener noreferrer"
				/>
				<HeaderLink
					to="https://larsvandenbosch.netlify.app/"
					name="Portfolio"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
		</header>
		<section
			class="bg-white fixed top-24 h-16 z-50 w-full border-border-color border-b p-4"
		>
			<header class="flex justify-between items-center">
				<button
					class="flex lg:hidden gap-1 items-center text-sm text-[#0C0D0E]"
					@click="toggle"
				>
					<Icon
						name="my-icon:menu"
						class="size-4"
					/>
					<span>Menu</span>
				</button>
				<DashboardFilterDropdown filter="Clear all" />
			</header>
		</section>
	</section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { toggle } = toggleSidebar();
</script>
