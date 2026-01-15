import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
import { makePersisted } from "@solid-primitives/storage";
export default function Junior2026() {
  const [state, setState] = makePersisted(createSignal(""), { name: "jr26" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      {<rect width="32" height="32" x="450" y="440" fill={getColorFromCode(state(), 0)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="500" y="440" fill={getColorFromCode(state(), 1)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="550" y="440" fill={getColorFromCode(state(), 2)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="600" y="440" fill={getColorFromCode(state(), 3)} stroke={"#000"} stroke-width={4} />}
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
          <img class="field-image" src="/2026/junior.jpg" alt="Junior Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );

  function getRandomState() {
    const ind1Bag = new MarbleBag(["R", "Y", "B", "X"]);

    setState(`JR26-${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "R") return "red";
    if (letter === "Y") return "yellow";
    if (letter === "B") return "blue";
    if (letter === "X") return "black";
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
