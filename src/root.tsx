// @refresh reload
import { Suspense } from "solid-js";
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import "./root.css";

import CountdownDropdown from "./components/CountdownDropdown";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>WRO Randomization Tool</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <header class="header">
          <img class="logo" src="https://wro.swiss/wp-content/uploads/2023/11/WRO_Switzerland_Weiss-FUeR-DUNKLEN-HINTERGRUND-300x86.png" alt="WRO Logo" />
          <A href="/">All</A>
          <A href="/2025/elementary">Elementary</A>
          <A href="/2025/junior">Junior</A>
          <A href="/2025/senior">Senior</A>
          <CountdownDropdown></CountdownDropdown>
        </header>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
