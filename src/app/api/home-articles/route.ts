export const GET = async () => {
  const posts = await fetch('https://dummyjson.com/posts')
  return new Response(JSON.stringify(await posts.json()), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
