import { createSignal } from "solid-js";
import { MarbleBag, rand } from "~/utils";
import "./Randomization.css";
export default function Elementary2024() {
  const [state, setState] = createSignal("");
  if (state() === "") getRandomState();
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      //
      {<rect width="32" height="32" x="730" y="40" fill={RYColor(state(), 0)} stroke="#000" stroke-width={4} />}
      {<rect width="32" height="32" x="780" y="40" fill={RYColor(state(), 1)} stroke="#000" stroke-width={4} />}
      //
      {<rect width="32" height="32" x="55" y="210" fill={RYColor(state(), 2)} stroke="#000" stroke-width={4} />}
      {<rect width="32" height="32" x="390" y="230" fill={RYColor(state(), 3)} stroke="#000" stroke-width={4} />}
      //
      {<rect width="32" height="32" x="225" y="425" fill={VegDirtColor(state(), 0)} stroke={VegDirtBorder(state(), 0)} stroke-width={4} />}
      {<rect width="32" height="32" x="300" y="425" fill={VegDirtColor(state(), 1)} stroke={VegDirtBorder(state(), 1)} stroke-width={4} />}
      {<rect width="32" height="32" x="372" y="425" fill={VegDirtColor(state(), 2)} stroke={VegDirtBorder(state(), 2)} stroke-width={4} />}
      {<rect width="32" height="32" x="565" y="425" fill={VegDirtColor(state(), 3)} stroke={VegDirtBorder(state(), 3)} stroke-width={4} />}
      {<rect width="32" height="32" x="635" y="425" fill={VegDirtColor(state(), 4)} stroke={VegDirtBorder(state(), 4)} stroke-width={4} />}
      {<rect width="32" height="32" x="707" y="425" fill={VegDirtColor(state(), 5)} stroke={VegDirtBorder(state(), 5)} stroke-width={4} />}
      Sorry but this browser does not support inline SVG.
    </svg>
  );
  return (
    <>
      <button class="generate-button" onClick={() => getRandomState()}>
        GENERATE
      </button>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2024/Elementary-2D.jpg" alt="Elementary Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const veggiesb = new MarbleBag(["V", "D", "V", "D", "V", "D"]);
    const rybag = new MarbleBag(["R", "Y", "R", "Y"]);

    setState(`EL24-${veggiesb.draw()}${veggiesb.draw()}${veggiesb.draw()}${veggiesb.draw()}${veggiesb.draw()}${veggiesb.draw()}-${rybag.draw()}${rybag.draw()}${rybag.draw()}${rybag.draw()}-XXXX`);
  }
}

function VegDirtColor(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    return letter === "V" ? "green" : "black";
  } catch {}
}
function RYColor(code: string, index: number) {
  try {
    const letter = code.split("-")[2].charAt(index);
    return letter === "R" ? "red" : "yellow";
  } catch {}
}
function VegDirtBorder(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    return letter === "V" ? "#000" : "#fff";
  } catch {}
}
function isVisible(code: string, index: number) {
  return true;
  try {
    const letter = code.split("-")[1].charAt(index);
    return letter == "V";
  } catch {}
}
