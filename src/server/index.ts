import { styleText } from "node:util";

import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";

import index from "../client/index.html";

const DEFAULT_PORT = 4000;

const port = Number(process.env.PORT) || DEFAULT_PORT;

const spa = new Elysia()
  .use(
    await staticPlugin({
      assets: "src/client",
      prefix: "",
      indexHTML: true,
    }),
  )
  .get("/*", index);

const api = new Elysia({
  name: "API",
  prefix: "/api",
}).get("/test", async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 5_000 + 1_000),
  );
  return { message: "Hello from the API!" };
});

const app = new Elysia().use([api, spa]);

export type Server = typeof app;

app.listen(port);

console.log(
  `Server running at ${styleText(["blue", "underline"], `http://0.0.0.0:${port}`)}`,
);
