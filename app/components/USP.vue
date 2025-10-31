<template>
	<div class="flex flex-col items-center lg:grid grid-cols-3 gap-4 lg:gap-16">
		<div class="flex flex-col gap-2">
			<span class="tagline">{{ tagline }}</span>
			<h1 class="heading">
				{{ title }}
			</h1>
			<p class="paragraph">
				{{ description }}
			</p>
		</div>
		<div class="col-span-2">
			<NuxtImg
				:src="`/assets/img/${imgSrc}.png`"
				alt="USP Image"
				loading="lazy"
				format="webp"
				class="drop-shadow-lg rounded-2xl object-cover w-full h-full"
			/>
		</div>
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
