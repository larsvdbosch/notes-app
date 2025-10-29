<template>
	<div class="border-b border-[var(--color-border)] bg-[image:repeating-linear-gradient(315deg,_var(--color-pattern)_0,_var(--color-pattern)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
		<section class="container padding-section flex justify-center px-4">
			<div class="flex items-center text-[var(--color-text)] gap-4 flex-col">
				<h1 class="heading-hero max-w-3xl">
					The new note taking app you can’t miss out on
				</h1>
				<p class="paragraph-hero max-w-md">
					Notably is a completely free website for writing down notes. Fast, secure, free.
				</p>
				<Button
					v-if="isLoggedIn"
					to="/dashboard"
				>
					Dashboard
				</Button>
				<Button
					v-else
					to="/login"
				>
					Sign in
				</Button>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
const { isLoggedIn } = getUser();
</script>
