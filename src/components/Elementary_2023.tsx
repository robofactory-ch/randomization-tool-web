import { createSignal } from "solid-js";
import { MarbleBag, rand } from "~/utils";
import "./Randomization.css";
export default function Elementary2023() {
  const [state, setState] = createSignal("");
  if (state() === "") getRandomState();
  const svg = (
    <svg class="rand-image" height="485" width="1000">
      {isVisible(state(), 0) && <rect width="32" height="32" x="212" y="12" fill="red" stroke="#000" stroke-width={4} />}
      {isVisible(state(), 1) && <rect width="32" height="32" x="655" y="12" fill="white" stroke="#000" stroke-width={4} />}
      {isVisible(state(), 2) && <rect width="32" height="32" x="212" y="430" fill="black" stroke="#fff" stroke-width={4} />}
      {isVisible(state(), 3) && <rect width="32" height="32" x="655" y="430" fill="blue" stroke="#fff" stroke-width={4} />}
      <circle cx={getWhalePositionForCode(state())[0]} cy={getWhalePositionForCode(state())[1]} r="16" fill="blue" stroke="#000" stroke-width={4} />
      Sorry but this browser does not support inline SVG.
    </svg>
  );
  return (
    <>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2023/Elementary-2D.jpg" alt="Elementary Game Field" width={1000} />
          {svg}
        </div>
      </div>
      {state()}
    </>
  );
  function getRandomState() {
    const bag = new MarbleBag(["V", "V", "X", "X"]);
    const whale = rand(0, 3);

    setState(`EL23-${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}-XXXX-${whale}XXX`);
  }
}

function isVisible(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    return letter == "V";
  } catch {}
}

function getWhalePositionForCode(code: string) {
  const x = [337, 337, 562, 562];
  const y = [145, 337, 145, 337];

  return [x[Number(code.split("-")[3].charAt(0))], y[Number(code.split("-")[3].charAt(0))]];
}
