import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text("Welcome to Hono")
});

// i use nodejs on development, so that conf goes here

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on http://localhost:${info.port}`)
// });

export default app;
