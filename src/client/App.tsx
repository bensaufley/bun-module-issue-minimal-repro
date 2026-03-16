import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./Root";
import { Toaster } from "./components/ui/toaster";
import { Provider as ChakraProvider } from "./components/ui/provider";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Root />
        <Toaster />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
