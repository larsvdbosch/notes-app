<template>
	<div class="bg-[var(--color-accordion-background)] h-full content-between border border-[var(--color-accordion-border)] rounded-2xl p-4">
		<div class="flex flex-col justify-between h-full gap-4 text-[var(--color-text)]">
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
