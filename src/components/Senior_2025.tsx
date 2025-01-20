import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
import { makePersisted } from "@solid-primitives/storage";
export default function Senior2025() {
  const [state, setState] = makePersisted(createSignal(""), { name: "sn24" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      <rect width="32" height="32" x="355" y="20" fill={IndColor(state(), 0)} stroke="#000" stroke-width={4} />
      <rect width="32" height="32" x="395" y="20" fill={IndColor(state(), 1)} stroke="#000" stroke-width={4} />
      //
      <rect width="32" height="32" x="570" y="440" fill={IndColor(state(), 1)} stroke="#000" stroke-width={4} />
      <rect width="32" height="32" x="610" y="440" fill={IndColor(state(), 0)} stroke="#000" stroke-width={4} />
      //
      <rect width="32" height="32" x="860" y="47" fill={IndColor(state(), 2)} stroke="#000" stroke-width={4} />
      <rect width="32" height="32" x="860" y="85" fill={IndColor(state(), 3)} stroke="#000" stroke-width={4} />
      //
      <rect width="32" height="32" x="920" y="350" fill={IndColor(state(), 4)} stroke="#000" stroke-width={4} />
      <rect width="32" height="32" x="920" y="390" fill={IndColor(state(), 5)} stroke="#000" stroke-width={4} />
      //
      <rect width="32" height="32" x="30" y="85" fill={IndColor(state(), 6)} stroke="#000" stroke-width={4} />
      <rect width="32" height="32" x="30" y="130" fill={IndColor(state(), 7)} stroke="#000" stroke-width={4} />
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
    const bag = new MarbleBag(["B", "G", "B", "G", "B", "G", "B", "G"]);

    setState(`SN24-${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}`);
  }
}

function IndColor(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "G") return "green";
    if (letter === "B") return "blue";
    if (letter === "N") return "rgba(0,0,0,0)";
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
