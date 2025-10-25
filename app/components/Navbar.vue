<template>
	<header class="sticky inset-x-0 top-0 z-30 bg-white border-b border-gray-200">
		<section class="container flex justify-between items-center p-4">
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
			<div class="flex items-center gap-4">
				<NuxtLink to="/login">
					<span class="text-black text-sm">Log in</span>
				</NuxtLink>
				<Button to="login">
					Try Notably
				</Button>
			</div>
		</section>
	</header>
</template>

<script setup lang="ts">
</script>
