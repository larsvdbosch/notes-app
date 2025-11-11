<script lang="ts" setup>
const { isOpen } = toggleSidebar()
const { status, refresh } = await fetchPosts() // Posts ff gedelete voor testen
// const client = useSupabaseClient();
// const user = useSupabaseUser();
const { notes } = useNotes()

// const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms))

// const { data: posts, status, refresh } = await useFetch<Post[]>('https://json-placeholder.mock.beeceptor.com/posts', {
//   server: false,
//   onRequest: async () => {
//     await delay(4000)
//   },
// })

// const { data: notes } = useAsyncData<Note[]>('notes', async () => {
//   const { data, error } = await client
//     .from('notes')
//     .select('id, title, content, created_at')
//     .order('created_at', { ascending: false })
//     .eq('user_id', user.value?.id)

//   if (error)
//     console.error(error)
//   return data || []
// })
</script>

<template>
  <aside
    class="bg-[var(--color-background)] ml-[-1000px] lg:ml-0 absolute lg:fixed overflow-auto w-full lg:w-96 h-full border-[var(--color-border)] border-r p-4 flex fade-in"
    :class="{ '!ml-0': isOpen }"
  >
    <div class="flex flex-col gap-4 w-full">
      <DashboardButton
        @click="refresh"
      >
        Refresh notes
      </DashboardButton>
      <DashboardLoader
        v-if="status === 'pending'"
      />
      <div
        v-for="note in notes"
        v-else
        :key="note.id"
      >
        <NuxtLink class="cursor-pointer">
          <article class="flex flex-col gap-2 text-black bg-[#e7fff4] hover:bg-[#daf8ea] border border-[#c1fae0] transition-colors duration-[.25s] p-4 rounded-lg w-full">
            <h1 class="font-semibold text-2xl line-clamp-1">
              {{ note.title }}
            </h1>
            <p class="leading-5 line-clamp-2">
              {{ note.content }}
            </p>
            <div class="place-items-end">
              <p>
                {{ note.date }}
              </p>
            </div>
          </article>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<style>
.fade-in {
transition-property: margin-left;
transition-duration: 300ms;
transition-timing-function: ease;
}
</style>
