"use client";

import { api } from "@/lib/api";
import * as React from "react";

export const APITimeout = () => {
  const [loading, setLoading] = React.useState(true);
  const [response, setResponse] = React.useState<string>();

  React.useEffect(() => {
    const controller = new AbortController();

    api
      .get<string>("/api-timeout", { signal: controller.signal })
      .then((_response) => {
        setResponse(_response.data);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  });

  return (
    <>
      <code>/pages/api/api-timeout.ts</code>
      {loading ? <p>Loading...</p> : <p>{response}</p>}
    </>
  );
};
