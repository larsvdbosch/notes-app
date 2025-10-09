<script lang="ts" setup>
const { isOpen } = toggleSidebar();
const { status, refresh } = await fetchPosts(); // Posts ff gedelete voor testen
const { notes } = useNotes();
// const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

// const { data: posts, status, refresh } = await useFetch<Post[]>("https://json-placeholder.mock.beeceptor.com/posts",
// 	{
// 		server: false,
// 		onRequest: async () => {
// 			await delay(4000);
// 		},
// 	});

// const { data: posts, status, refresh } = await useLazyFetch<Post[]>("https://json-placeholder.mock.beeceptor.com/posts",
// 	{
// 		server: false,
// 		onRequest: async () => {
// 			await new Promise(resolve => setTimeout(resolve, 4000));
// 		},
// 	});
</script>

<template>
	<aside
		class="bg-white ml-[-1000px] lg:ml-0 absolute lg:fixed overflow-scroll w-full lg:w-96 h-full border-border-color border-r p-4 flex transition-all duration-300 ease"
		:class="{ '!ml-0': isOpen }"
	>
		<div class="flex flex-col gap-4 w-full">
			<Button @click="refresh">
				Refresh notes
			</Button>
			<Loader
				v-if="status === 'pending'"
			/>
			<div
				v-for="note in notes"
				v-else
				:key="note.id"
			>
				<NuxtLink to="/">
					<article class="flex flex-col gap-2 bg-primary hover:bg-[#121c2f] border border-primary-border transition duration-150 ease-in-out text-primary-dark p-4 rounded-lg w-full">
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
