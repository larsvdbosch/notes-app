<template>
	<footer class="w-full border-t border-[var(--color-border)] bg-[var(--color-background)]">
		<div class="flex items-center justify-center p-8">
			<Logo
				to="/"
				@click="backToTop"
			/>
		</div>
	</footer>
</template>

<script lang="ts" setup>
const backToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
