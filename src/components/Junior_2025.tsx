import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
import { makePersisted } from "@solid-primitives/storage";
export default function Junior2025() {
  const [state, setState] = makePersisted(createSignal(""), { name: "jr25" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      {<rect width="32" height="32" x="430" y="120" fill={getColorFromCode(state(), 0)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="430" y="160" fill={getColorFromCode(state(), 1)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="430" y="200" fill={getColorFromCode(state(), 2)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="430" y="240" fill={getColorFromCode(state(), 3)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="430" y="280" fill={getColorFromCode(state(), 4)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="430" y="320" fill={getColorFromCode(state(), 5)} stroke={"#000"} stroke-width={4} />}
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
          <img class="field-image" src="/2025/junior.jpg" alt="Junior Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );

  function getRandomState() {
    const ind1Bag = new MarbleBag(["R", "G", "Y", "W", "X", "X"]);

    setState(`JR25-${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "G") return "green";
    if (letter === "W") return "white";
    if (letter === "Y") return "yellow";
    if (letter === "R") return "red";
    if (letter === "X") return "rgba(0,0,0,0)";
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
