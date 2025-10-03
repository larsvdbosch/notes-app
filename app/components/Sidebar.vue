<script setup lang="ts">
import type Post from "../../types/post";

const { isOpen } = toggleSidebar();

const delay = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

const { data: posts, status, refresh } = await useFetch<Post[]>("https://json-placeholder.mock.beeceptor.com/posts",
	{
		server: false,
		onRequest: async () => {
			await delay(4000);
		},
	});

const pending = computed(() => status.value === "pending");
</script>

<template>
	<aside
		class="bg-white ml-[-1000px] lg:ml-0 absolute lg:fixed overflow-scroll w-full lg:w-96 h-full border-[#F8F8F8] border-r p-4 flex transition-all duration-300 ease"
		:class="{ '!ml-0': isOpen }"
	>
		<div class="flex flex-col gap-4 w-full">
			<Button @click="refresh">
				Refresh posts
			</Button>
			<Loader
				v-if="pending"
			/>
			<div
				v-for="post in posts"
				v-else
				:key="post.id"
			>
				<NuxtLink to="/">
					<article class="flex flex-col gap-2 bg-[#FFD8E1] hover:bg-[#FFCFDA] border border-[#F8A1B4] transition duration-150 ease-in-out text-[#872C40] p-4 rounded-lg w-full">
						<h1 class="font-semibold text-2xl line-clamp-1">
							{{ post.title }}
						</h1>
						<p class="leading-5 line-clamp-2">
							{{ post.body }}
						</p>
					</article>
				</NuxtLink>
			</div>
		</div>
	</aside>
</template>
