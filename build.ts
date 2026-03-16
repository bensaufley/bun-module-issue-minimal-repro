import { rimraf } from "rimraf";

await rimraf("dist");

await Bun.build({
  entrypoints: ["src/server/index.ts"],
  outdir: "dist",
  root: "src",
  target: "bun",
  publicPath: "/",
});
