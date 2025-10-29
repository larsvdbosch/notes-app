<template>
	<section class="bg-[var(--color-banner)] flex fixed top-0 h-8 z-50 w-full border-[var(--color-border)] border-b">
		<header
			class="p-4 flex justify-center items-center w-full"
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
		</header>
	</section>
</template>
