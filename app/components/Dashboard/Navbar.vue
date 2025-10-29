<template>
	<header class="sticky z-50 bg-[var(--color-background)]">
		<section class="h-[var(--height-navbar)] flex justify-between items-center p-4">
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
		</section>
		<div
			class="sticky z-30 bg-[var(--color-background)] top-[calc(var(--height-navbar)+var(--height-navbar)) border-y border-[var(--color-border)]"
		>
			<section class="h-[var(--height-navbar)] flex justify-between items-center p-4">
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
			</section>
		</div>
	</header>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { toggle } = toggleSidebar();
</script>
