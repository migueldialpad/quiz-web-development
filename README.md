1. Reactjs related

```tsx
function Distance({x, y}) {
  // How often will `calculateDistance` be called?
  const distance = calculateDistance(x, y)
  return (
    <div>
      The distance between {x} and {y} is {distance}.
    </div>
  )
}
```

1.2. What is and use cases for React.lazy

2. Possible solutions for this performance issue https://react-performance.netlify.app/isolated/exercise/04.js

3. Code review a PR wherein a feed was added to the homepage<br>
https://github.com/migueldialpad/quiz-web-development/commit/edd3efee34e708883d8bcb06363878ad5e07cc0f

Follow-ups:
- On the use of the route handler
- Rendering alternatives when server load time is long due to e.g. intensive operations

4. Outline the model of a Content Type for rendering paginated entries. The module is to be reusable in that it can paginate any other type of predefined entries.
4.2. Outline the key parts of what the implementation would look like in Next.js

5. Outline a way to protect a Next.js management app with authentication (a CMS)