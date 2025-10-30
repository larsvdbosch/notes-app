<template>
	<header class="sticky z-50 bg-[var(--color-background)]">
		<section class="h-[var(--height-navbar)] flex justify-between items-center p-4">
			<Logo to="/" />
			<Search />
			<div class="flex items-center gap-2">
				<IconLink
					to="https://github.com/larsvdbosch/notes-app.git"
					icon="github"
					target="_blank"
					rel="noopener noreferrer"
					label="github"
				/>
				<IconLink
				v-if="darkMode"
					icon="sun"
					@click="toggleDarkmode"
					label="sun"
				/>
				<IconLink
				v-else
					icon="moon"
					@click="toggleDarkmode"
					label="moon"
				/>
			</div>
		</section>
		<div
			class="sticky z-30 bg-[var(--color-background)] top-[calc(var(--height-navbar)+var(--height-navbar)) border-y border-[var(--color-border)]"
		>
			<section class="h-[var(--height-navbar)] flex justify-between items-center p-4">
				<button
					class="flex lg:hidden gap-1 items-center text-sm text-[var(--color-text)]"
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
<script setup lang="ts">
const { toggle } = toggleSidebar();
const { toggleDarkmode, darkMode } = useDarkmode();
</script>
