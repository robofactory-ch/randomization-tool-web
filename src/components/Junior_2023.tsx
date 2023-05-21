import { createSignal } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
export default function Junior2023() {
  const [state, setState] = createSignal(getRandomState());
  if (state() === "") getRandomState();
  const svg = (
    <svg class="rand-image" height="485" width="1000">
      <rect width="16" height="16" x="15" y={offsetForInd1(state(), 1)} fill="#000" stroke="#fff" />
      <rect width="16" height="16" x="15" y={offsetForInd1(state(), 3)} fill="#fff" stroke="#000" />
      <rect width="16" height="16" x="15" y={offsetForInd2(state(), 1)} fill="#000" stroke="#fff" />
      <rect width="16" height="16" x="15" y={offsetForInd2(state(), 3)} fill="#fff" stroke="#000" />
      <circle cx={getBrokenPositionForCode(state())[0]} cy={getBrokenPositionForCode(state())[1]} r="16" fill="red" />
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
          <img class="field-image" src="/2023/Junior-2D.jpg" alt="Junior Game Field" width={1000} />
          {svg}
        </div>
      </div>
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const broken = rand(1, 4);

    const ind1Bag = new MarbleBag([1, 2, 3, 4]);
    const ind2Bag = new MarbleBag([1, 2, 3, 4]);

    return `JR23-B${ind1Bag.draw()}W${ind1Bag.draw()}-B${ind2Bag.draw()}W${ind2Bag.draw()}-${broken}XXX`;
  }
}

function offsetForInd1(code: string, index: number) {
  return 205 - (Number(code.split("-")[1].charAt(index)) - 1) * 20;
}
function offsetForInd2(code: string, index: number) {
  return 320 - (Number(code.split("-")[2].charAt(index)) - 1) * 20;
}
function getBrokenPositionForCode(code: string) {
  const x = [484, 484, 697, 697];
  const y = [121, 55, 55, 121];

  return [x[Number(code.split("-")[3].charAt(0)) - 1], y[Number(code.split("-")[3].charAt(0)) - 1]];
}
