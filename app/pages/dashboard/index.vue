<template>
	<div>
		<div class="flex flex-col gap-4 lg:ml-96 px-4 py-6 lg:px-16 lg:py-12 min-h-screen text-[#0C0D0E]">
			<textarea
				v-model="noteTitle"
				placeholder="De planning voor morgen..."
				class="resize-none max-h-min bg-transparent border-none outline-none font-semibold text-[2.5rem] tracking-tight"
				maxlength="30"
				wrap="hard"
				rows="1"
				@keyup.enter="addNote"
			/>
			<textarea
				v-model="noteContent"
				placeholder="Morgen ga ik naar school en daarna..."
				class="resize-none bg-transparent border-none outline-none font-normal leading-6"
				rows="30"
				@keyup.enter="addNote"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const { addNote, noteTitle, noteContent } = useNotes();

definePageMeta({
	layout: "dashboard",
	middleware: "auth",
});

onMounted(() => {
	document.body.classList.remove("dark-mode");
});
</script>
