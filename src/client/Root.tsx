import { useQuery } from "@tanstack/react-query";

export default function Root() {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await fetch("/api/test");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div>
      <h1>Bun Module Issue Repro</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
