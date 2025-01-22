import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
import { makePersisted } from "@solid-primitives/storage";
export default function Senior2025() {
  const [state, setState] = makePersisted(createSignal(""), { name: "sn25" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      {<rect width="32" height="32" x="630" y="30" fill={getColorFromCode(state(), 0)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="480" y="30" fill={getColorFromCode(state(), 1)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="630" y="70" fill={getColorFromCode(state(), 2)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="480" y="70" fill={getColorFromCode(state(), 3)} stroke={"#000"} stroke-width={4} />}
      {<rect width="16" height="32" x="450" y="200" fill={getColorFromCode(state(), 4)} stroke={"#000"} stroke-width={4} />}
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
          <img class="field-image" src="/2025/senior.jpg" alt="Senior Game Field" width={1000} />
          {svg}
        </div>
      </div>

      {/* <p>Corresponding to the starting area drawn at the start of the competition, 2 modules can be omitted (those farther away from the starting area)</p> */}
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const bag = new MarbleBag(["R", "G", "B", "Y"]);
    const bag2 = new MarbleBag(["R", "G", "B", "Y"]);

    setState(`SN25-${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}${bag2.draw()}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "R") return "red";
    if (letter === "G") return "green";
    if (letter === "B") return "blue";
    if (letter === "Y") return "yellow";
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
