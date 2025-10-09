<template>
	<div
		class="group"
		@click="toggleDropdown"
	>
		<button
			class="flex items-center cursor-default bg-white hover:bg-[#F8F8F8] border border-[#F0F0F0] transition-colors duration-[.15s] font-normal px-2 py-1 rounded-[4px] gap-1"
		>
			<NuxtImg
				src="/assets/svg/menu.svg"
				alt="filter-icon"
				width="16"
				height="16"
			/>
			<span>Filter notes</span>
		</button>
		<button
			:class="{ hidden: !isOpen }"
			class="absolute flex mt-1 items-center cursor-default bg-white hover:bg-[#F8F8F8] border border-[#F0F0F0] transition-colors duration-[.15s] font-normal px-2 py-1 rounded-[4px] gap-1"
			@click="removeNotes"
		>
			<span>{{ props.filter }}</span>
		</button>
	</div>
</template>

<script setup lang="ts">
const { removeNotes } = useNotes();

interface Props {
	filter: string;
}

const props = defineProps<Props>();

const isOpen = ref(false);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};
</script>
