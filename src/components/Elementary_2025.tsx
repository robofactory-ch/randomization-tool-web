import { createSignal } from "solid-js";
import { MarbleBag, rand } from "~/utils";
import "./Randomization.css";
import { makePersisted } from "@solid-primitives/storage";
export default function Elementary2025() {
  const [state, setState] = makePersisted(createSignal(""), { name: "el25" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      //
      {<rect width="32" height="32" x="275" y="425" fill={getColorFromCode(state(), 0)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="345" y="425" fill={getColorFromCode(state(), 1)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="420" y="425" fill={getColorFromCode(state(), 2)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="490" y="425" fill={getColorFromCode(state(), 3)} stroke={"#000"} stroke-width={4} />}
      {<rect width="32" height="32" x="562" y="425" fill={getColorFromCode(state(), 4)} stroke={"#000"} stroke-width={4} />}
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
          <img class="field-image" src="/2025/elementary.jpg" alt="Elementary Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const colorb = new MarbleBag(["R", "G", "Y", "B", "W"]);
    const leftoutb = new MarbleBag([0, 1, 2, 3, 4]);

    setState(`EL25-${colorb.draw()}${colorb.draw()}${colorb.draw()}${colorb.draw()}${colorb.draw()}-X${leftoutb.draw()}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    const leftOutIndex = code.split("-")[2].charAt(1);
    if (`${index}` === leftOutIndex) return "rgba(0,0,0,0)";
    if (letter === "R") return "red";
    if (letter === "G") return "green";
    if (letter === "Y") return "yellow";
    if (letter === "B") return "blue";
    if (letter === "W") return "white";
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
