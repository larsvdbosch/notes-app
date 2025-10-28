<template>
	<button
		v-if="isOpen === false"
		class="flex lg:hidden cursor-default p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
		@click="openSidebar"
	>
		<Icon
			name="my-icon:menu-icon"
			class="text-[var(--color-text)]"
		/>
	</button>
	<button
		v-else
		class="flex lg:hidden cursor-default p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
		@click="closeSidebar"
	>
		<Icon
			name="my-icon:cross"
			class="text-[var(--color-text)]"
		/>
	</button>
	<aside
		:class="[
			'fixed margin-navbar-height border-t border-[var(--color-border)] block p-4 block-col gap-2 bg-[var(--color-background)] inset-0 z-50 transition-all duration-[.25s] ease-out lg:hidden', // default
			{ 'translate-x-0': isOpen === true }, // open
			{ 'translate-x-full': isOpen === false }, // close
		]"
	>
		<div
			class="flex flex-col gap-4"
		>
			<NuxtLink
				v-for="item in items"
				:key="item.name"
				:to="item.to"
				class="heading text-[var(--color-text)]"
			>
				{{ item.name }}
			</NuxtLink>
			<!-- <Button
				to="dashboard"
			>
				Dashboard
			</Button> -->
		</div>
	</aside>
</template>

<script lang="ts" setup>
const isOpen = useState("sidebar-is-open", () => false);

const openSidebar = () => {
	isOpen.value = true;
	document.body.classList.add("overflow-hidden");
	window.scrollTo(0, 0);
};

const closeSidebar = () => {
	isOpen.value = false;
	document.body.classList.remove("overflow-hidden");
	window.scrollTo(0, 0);
};

const items = [
	{ name: "Home", to: "/" },
	{ name: "Features", to: "/" },
	{ name: "Portfolio", to: "/" },
];
</script>
