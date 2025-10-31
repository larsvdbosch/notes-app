<template>
	<header class="sticky top-0 z-50 bg-[var(--color-background)]">
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
					label="sun"
					@click="toggleDarkmode"
				/>
				<IconLink
					v-else
					icon="moon"
					label="moon"
					@click="toggleDarkmode"
				/>
			</div>
		</section>
		<div
			class="top-0 z-30 bg-[var(--color-background)] top-[calc(var(--height-navbar)+var(--height-navbar)) border-y border-[var(--color-border)]"
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
