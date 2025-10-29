<template>
	<div
		class="group"
		@click="toggleDropdown"
	>
		<button
			class="flex items-center cursor-default bg-white hover:bg-[#F8F8F8] border border-[#F0F0F0] transition-colors duration-[.15s] font-normal px-2 py-1 rounded-[4px] gap-1"
		>
			<Icon name="my-icon:menu-icon" />
			<span>Options</span>
		</button>
		<ul>
			<NuxtLink
				v-for="item in items"
				:key="item.id"
				:class="{ hidden: !isOpen }"
				class="flex mt-1 items-center cursor-default bg-white hover:bg-[#F8F8F8] border border-[#F0F0F0] transition-colors duration-[.15s] font-normal px-2 py-1 rounded-[4px] gap-1"
				@click="item.action"
			>
				{{ item.name }}
			</NuxtLink>
		</ul>
	</div>
</template>

<script setup lang="ts">
const { removeNotes } = useNotes();
const isOpen = ref(false);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const items = ref([{ name: "Clear all", id: 1, action: removeNotes }, { name: "Filter notes", id: 2 }]);
</script>
