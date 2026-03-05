import { styleText } from "node:util";

import index from "../client/index.html";

const DEFAULT_PORT = 4000;

const port = Number(process.env.PORT) || DEFAULT_PORT;

Bun.serve({
  port,
  routes: {
    "/test": async () => {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 5_000 + 1_000),
      );
      return Response.json({ message: "Hello from the API!" });
    },
    "/*": index,
  },
});

console.log(
  `Server running at ${styleText(["blue", "underline"], `http://0.0.0.0:${port}`)}`,
);
