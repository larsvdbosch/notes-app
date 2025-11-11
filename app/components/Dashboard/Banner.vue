<template>
  <section class="top-0 origin-top z-50 bg-primary">
    <div
      class="h-[var(--height-banner)] flex justify-center items-center p-4 w-full"
    >
      <NuxtLink
        to="https://github.com/larsvdbosch/notes-app"
        class="flex items-center text-white hover:text-gray-100 text-sm font-medium gap-1 transition-color duration-[.15s] ease-out"
      >
        <span>
          Early access is live!
        </span>
        <Icon
          name="my-icon:arrow-right"
          class="size-4"
        />
      </NuxtLink>
    </div>
  </section>
</template>
