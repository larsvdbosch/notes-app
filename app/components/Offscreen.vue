<template>
	<button
		v-if="isOpen === false"
		class="flex lg:hidden active-state cursor-default p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
		@click="openSidebar"
	>
		<Icon
			name="my-icon:menu-icon"
			class="text-[var(--color-text)] size-5"
		/>
	</button>
	<button
		v-else
		class="flex lg:hidden active-state cursor-default p-2 rounded-lg hover:bg-[var(--color-accordion-hover)] transition-colors duration-[.25s] ease-out items-center"
		@click="closeSidebar"
	>
		<Icon
			name="my-icon:cross"
			class="text-[var(--color-text)] size-5"
		/>
	</button>
	<aside
		:class="[
			'fixed top-[calc(var(--height-banner)+var(--height-navbar))] block p-4 block-col gap-2 bg-[var(--color-background)] inset-0 z-50 border-t border-[var(--color-border)] transition-transform duration-[.25s] ease-out lg:hidden', // default
			{ 'translate-x-0': isOpen === true }, // open
			{ 'translate-x-full': isOpen === false }, // close
		]"
	>
		<ul
			class="flex flex-col gap-4"
		>
			<li>
				<HeaderLink
					v-for="item in items"
					:key="item.name"
					:to="item.to"
					:name="item.name" />
			</li>
		</ul>
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
	{ name: "Features", to: "/features" },
	{ name: "Changelog", to: "/changelog" },
];
</script>
