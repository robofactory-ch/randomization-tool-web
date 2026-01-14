import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import CountdownDropdown from "./components/countdownDropdown";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>WRO Randomizations</Title>
          <header class="header">
            <img class="logo" src="https://wro.swiss/wp-content/uploads/2023/11/WRO_Switzerland_Weiss-FUeR-DUNKLEN-HINTERGRUND-300x86.png" alt="WRO Logo" />
            <a href="/">All</a>
            <a href="/2026/elementary">Elementary</a>
            <a href="/2026/junior">Junior</a>
            <a href="/2026/senior">Senior</a>
            <CountdownDropdown></CountdownDropdown>
          </header>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
