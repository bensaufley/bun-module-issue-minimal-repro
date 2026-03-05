import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./Root";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}
