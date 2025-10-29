<template>
	<section class="sticky top-0 z-50 bg-[var(--color-banner)] border-[var(--color-border)] border-b">
		<div
			class="h-[var(--height-banner)] flex justify-center items-center p-4 w-full"
		>
			<NuxtLink
				to="/"
				class="flex items-center text-[#f92aae] hover:text-[#e21f9b] text-sm font-medium gap-1 transition-color duration-[.15s] ease-out"
			>
				<span>
					Early access is live!
				</span>
				<Icon
					name="my-icon:arrow-right"
					class="size-4"
				/>
			</NuxtLink>
		</div>
	</section>
</template>
