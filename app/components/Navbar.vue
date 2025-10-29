<template>
	<header class="sticky inset-x-0 top-0 z-30 bg-[var(--color-background)] border-b border-[var(--color-border)]">
		<section class="container navbar-height flex justify-between items-center p-4">
			<NuxtLink
				class="flex items-center"
				to="/"
			>
				<!-- <Logo /> -->
				<DotLottieVue
					v-if="darkMode"
					style="height: 56px; width: auto"
					autoplay
					src="/assets/lottie/light-logo.lottie"
				/>
				<DotLottieVue
					v-else
					style="height: 56px; width: auto"
					autoplay
					src="/assets/lottie/dark-logo.lottie"
				/>
			</NuxtLink>
			<div class="hidden lg:flex items-center gap-2">
				<HeaderLink
					to="/"
					name="Home"
				/>
				<HeaderLink
					to="/"
					name="Features"
				/>
				<HeaderLink
					to="https://larsvandenbosch.netlify.app/"
					name="Portfolio"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
			<div class="flex gap-2">
				<IconLink
					to="https://github.com/larsvdbosch/notes-app.git"
					icon="github"
					target="_blank"
					rel="noopener noreferrer"
				/>
				<IconLink
					icon="moon"
					@click="toggleDarkmode"
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
					Sign In
				</Button>
				<Avatar v-if="isLoggedIn" />
			</div>
		</section>
	</header>
</template>

<script lang="ts" setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";

const { isLoggedIn } = getUser();

const { darkMode, toggleDarkmode } = useDarkmode();
</script>
