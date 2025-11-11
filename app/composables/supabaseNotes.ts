// export async function supabaseNotes() {
//   const client = useSupabaseClient()

//   const { data: notes } = useAsyncData('notes', async () => {
//     const { data, error } = await client
//       .from('notes')
//       .select('id, title, content, created_at')
//       .order('created_at', { ascending: false })

//     if (error)
//       console.error(error)
//     return data || []
//   })

//   return {
//     notes,
//   }
// }
