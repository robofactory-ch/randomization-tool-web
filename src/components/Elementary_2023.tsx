import { createSignal } from "solid-js";
import { MarbleBag, rand } from "~/utils";
import "./Randomization.css";
export default function Elementary2023() {
  const [state, setState] = createSignal("");
  const [mode, setMode] = createSignal(0);
  if (state() === "") getRandomState();
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
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
      <button class="generate-button" onClick={() => getRandomState()}>
        GENERATE
      </button>
      <select
        name="cellsWide"
        onChange={(e) => {
          setMode((_) => {
            return e.currentTarget.value as unknown as number;
          });
        }}
      >
        <option value={0}>Normal</option>
        <option value={1}>Whale only</option>
        <option value={2}>Whale Fixed</option>
      </select>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2023/Elementary-2D.jpg" alt="Elementary Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const bag = new MarbleBag(["V", "V", "X", "X"]);
    let whale = rand(0, 3);
    if (mode() == 2) {
      whale = state().split("-")[3].charAt(0) as unknown as number;
    }
    // const whale = 0;
    setState(`EL23-${bag.draw()}${bag.draw()}${bag.draw()}${bag.draw()}-XXXX-${whale}XXX`);
  }
  function isVisible(code: string, index: number) {
    try {
      const letter = code.split("-")[1].charAt(index);
      return letter == "V" && mode() != 1;
    } catch {}
  }
}

function getWhalePositionForCode(code: string) {
  const x = [337, 337, 562, 562];
  const y = [145, 337, 145, 337];

  return [x[Number(code.split("-")[3].charAt(0))], y[Number(code.split("-")[3].charAt(0))]];
}
