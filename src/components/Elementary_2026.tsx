import { createSignal } from "solid-js";
import { MarbleBag, rand } from "~/utils";
import "./Randomization.css";
import { makePersisted } from "@solid-primitives/storage";
export default function Elementary2026() {
  const [state, setState] = makePersisted(createSignal(""), { name: "el26" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      //
      {<rect width="32" height="32" x="510" y="15" fill={getColorFromCode(state(), 0)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="560" y="15" fill={getColorFromCode(state(), 1)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="730" y="15" fill={getColorFromCode(state(), 2)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="790" y="15" fill={getColorFromCode(state(), 3)} stroke={"#000"} stroke-width={4} />}
      Sorry but this browser does not support inline SVG.
    </svg>
  );
  return (
    <>
      <div class="button-wrapper">
        <button class="generate-button" onClick={() => callWithDecreasingVelocity(getRandomState, 80, 25, 400)}>
          GENERATE
        </button>
      </div>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2026/elementary.jpg" alt="Elementary Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const colorb = new MarbleBag(["B", "W", "Y", "X"]);

    setState(`EL26-${colorb.draw()}${colorb.draw()}${colorb.draw()}${colorb.draw()}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "Y") return "yellow";
    if (letter === "X") return "black";
    if (letter === "W") return "white";
    if (letter === "B") return "blue";
  } catch {}
}

function callWithDecreasingVelocity(func: Function, initialDelay: number, decrement: number, minDelay: number) {
  let delay = initialDelay;

  function callFuncWithDelay() {
    func();
    if (delay < minDelay) {
      delay += decrement;
      setTimeout(callFuncWithDelay, delay);
    }
  }

  setTimeout(callFuncWithDelay, initialDelay);
}
