"use client";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

export function NavigationProgress() {
  const ref = useRef<LoadingBarRef>(null);
  const router = useRouter();

  useEffect(() => {
    const start = () => ref.current?.continuousStart();
    const complete = () => ref.current?.complete();

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", complete);
    router.events.on("routeChangeError", complete);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", complete);
      router.events.off("routeChangeError", complete);
    };
  }, [router]);

  return <LoadingBar color="var(--muted-foreground)" ref={ref} shadow={true} height={2} />;
}
