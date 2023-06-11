import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
export default function Senior2023() {
  const [state, setState] = createSignal(getRandomState());
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      <rect width="16" height="16" x="269" y="25" fill={state().split("-")[2].charAt(0) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      <rect width="16" height="16" x="300" y="25" fill={state().split("-")[2].charAt(1) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      <rect width="16" height="16" x="330" y="25" fill={state().split("-")[2].charAt(2) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      <rect width="16" height="16" x="360" y="25" fill={state().split("-")[2].charAt(3) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      <rect width="16" height="16" x="20" y="225" fill={state().split("-")[1].charAt(2) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      <rect width="16" height="16" x="20" y="245" fill={state().split("-")[1].charAt(3) === "G" ? "rgb(0, 255, 0)" : "rgb(0, 0, 255)"} />
      Sorry but this browser does not support inline SVG.
    </svg>
  );
  return (
    <>
      <button class="generate-button" onClick={() => setState(getRandomState())}>
        GENERATE
      </button>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2023/Senior-2D.jpg" alt="Senior Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const bag = new MarbleBag(["B", "B", "G", "G"]);
    const ind = new MarbleBag(["B", "B", "G", "G"]);

    return `SN23-XX${ind.draw()}${ind.draw()}-${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}`;
  }
}
