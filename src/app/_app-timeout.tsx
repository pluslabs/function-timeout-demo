"use client";

import { api } from "@/lib/api";
import * as React from "react";

export const AppTimeout = () => {
  const [loading, setLoading] = React.useState(true);
  const [response, setResponse] = React.useState<string>();

  React.useEffect(() => {
    const controller = new AbortController();

    api
      .get<string>("/app-timeout", { signal: controller.signal })
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
      <code>/app/api/app-timeout/route.ts</code>
      {loading ? <p>Loading...</p> : <p>{response}</p>}
    </>
  );
};
