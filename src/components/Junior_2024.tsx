import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
export default function Junior2023() {
  const [state, setState] = createSignal(getRandomState());
  if (state() === "") getRandomState();
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      <rect width="16" height="16" x="225" y="443" fill={IndColor(state(), 0)} stroke="#fff" />
      <rect width="16" height="16" x="260" y="443" fill={IndColor(state(), 1)} stroke="#fff" />
      <rect width="16" height="16" x="297" y="443" fill={IndColor(state(), 2)} stroke="#fff" />
      <rect width="16" height="16" x="332" y="443" fill={IndColor(state(), 3)} stroke="#fff" />
      <rect width="16" height="16" x="370" y="443" fill={IndColor(state(), 4)} stroke="#fff" />
      <rect width="16" height="16" x="405" y="443" fill={IndColor(state(), 5)} stroke="#fff" />
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
          <img class="field-image" src="/2024/Junior-2D.jpg" alt="Junior Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );

  function getRandomState() {
    const ind1Bag = new MarbleBag(["T", "T", "F", "F", "L", "L"]);

    return `JR24-${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}${ind1Bag.draw()}`;
  }
}

function IndColor(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "T") return "green";
    if (letter === "F") return "red";
    if (letter === "L") return "blue";
  } catch {}
}
