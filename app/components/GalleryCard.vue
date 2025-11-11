<script lang="ts" setup>
interface Props {
  title: string
  description: string
  imgSrc: string
}

defineProps<Props>()
</script>

<template>
  <article class="group bg-[#333333] min-h-[28rem] relative rounded-2xl overflow-hidden">
    <NuxtImg
      :src="`/assets/img/${imgSrc}.png`"
      alt="Card Image"
      loading="eager"
      class="aspect-[16/10] ml-16 mt-24 h-full w-full object-cover rounded-2xl"
    />
    <div class="group absolute bottom-0 w-full h-full text-white bg-gradient-to-t from-black/50 to-transparent">
      <div class="absolute flex flex-col gap-4 p-4 bottom-0 group-hover:-translate-y-4 transition-translate duration-[.15s] ease-out">
        <h3 class="heading-card">
          {{ title }}
        </h3>
        <span class="paragraph">
          {{ description }}
        </span>
      </div>
    </div>
  </article>
</template>
