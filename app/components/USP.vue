<template>
	<div class="flex flex-col lg:grid grid-cols-3 gap-4 lg:gap-16">
		<div class="flex flex-col gap-2">
			<span class="tagline">{{ tagline }}</span>
			<h1 class="heading">
				{{ title }}
			</h1>
			<p class="paragraph">
				{{ description }}
			</p>
		</div>
		<NuxtImg
			:src="`/assets/img/${imgSrc}.png`"
			alt="Logo"
			width="auto"
			loading="lazy"
			height="auto"
			class="col-span-2 drop-shadow-xl"
		/>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	tagline: string;
	title: string;
	description: string;
	imgSrc: string;
}

defineProps<Props>();
</script>
