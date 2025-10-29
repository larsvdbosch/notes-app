<script setup lang="ts">
</script>

<template>
	<div>
		<DashboardBanner />
		<Navbar class="top-[var(--height-banner)]" />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>
