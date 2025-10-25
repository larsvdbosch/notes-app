<template>
	<div class="bg-white border-2 border-gray-200 rounded-2xl p-4">
		<div class="flex flex-col gap-4 text-black">
			<span class="paragraph leading-6">{{ description }}</span>
			<div class="flex items-center gap-2">
				<NuxtImg
					:src="`/assets/img/${avatar}`"
					alt="Avatar"
					width="48"
					height="48"
					class="rounded-full"
				/>
				<p class="text-sm">
					{{ author }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	description: string;
	author: string;
	avatar: string;
}

defineProps<Props>();
</script>
