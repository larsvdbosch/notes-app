import type { Post } from '../../types/post'

export async function fetchPosts() {
  const { data: posts, status, refresh } = await useLazyFetch<Post[]>('https://json-placeholder.mock.beeceptor.com/posts', {
    server: false,
    onRequest: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    },
  })
  return { posts, status, refresh }
}
