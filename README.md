# Minimal repro of Bun dev server ReactQuery module issue

Minimal reproduction of an issue where it _seems like_ something in the HMR pipeline is causing `@tanstack/react-query` imports to have `undefined` values.

## To reproduce

To start the server:

```sh
bun dev
```

It's a little bit tricky to consistently reproduce but if you just mess around with the code (client or server) and then reload the page in the browser, it will generally show up if not after the first refresh than within a few modifications/refreshes:

![Screenshot of issue: "Runtime Error: TypeError: import_react_query.QueryClient is not a constructor"](./example.png)

If you pause in devtools before this issue is encountered, you'll see that the import (`import_react_query` in the screenshot) _exists, and `QueryClient` (for example) exists on it, but is `undefined`.

This seems to happen after a _hard refresh_, not after a client-side HMR swap.

I'm not sure if this is unique to React Query but that's where I've encountered it (and reproduced it here).
