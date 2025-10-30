<template>
	<header class="sticky z-30 bg-[var(--color-background)] border-b border-[var(--color-border)]">
		<section class="container h-[var(--height-navbar)] flex justify-between items-center p-4">
			<Logo />
			<div class="hidden lg:flex items-center gap-2">
				<HeaderLink
					to="/"
					name="Home"
				/>
				<HeaderLink
					to="/features"
					name="Features"
				/>
				<HeaderLink
					to="/changelog"
					name="Changelog"
				/>
			</div>
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
				<Offscreen />
				<Button
					v-if="isLoggedIn"
					class="hidden lg:block"
					to="dashboard"
				>
					Dashboard
				</Button>
				<Button
					v-else
					class="hidden lg:block"
					to="login"
				>
					Sign in
				</Button>
				<Avatar v-if="isLoggedIn" />
			</div>
		</section>
	</header>
</template>

<script lang="ts" setup>
// import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { isLoggedIn } = getUser();

const { toggleDarkmode, darkMode } = useDarkmode();
</script>
