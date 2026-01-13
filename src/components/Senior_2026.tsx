import { createSignal, For } from "solid-js";
import "./Randomization.css";
import { MarbleBag, rand } from "~/utils";
import { makePersisted } from "@solid-primitives/storage";

import jsPDF from "jspdf";
export default function Senior2026() {
  const [state, setState] = makePersisted(createSignal("SN26-XXXXXXXXXXXX"), { name: "sn26" });
  const svg = (
    <svg class="rand-image" viewBox="0 0 1000 485" height="485" width="1000" preserveAspectRatio="xMidYMid meet">
      <For each={state().split("-")[1].split("")}>
        {(color, index) => <rect width="32" height="32" y={120 + Math.floor(index() / 4) * 50} x={400 + (index() % 4) * 50} fill={getColorFromCode(state(), index())} stroke={"#000"} stroke-width={4} />}
      </For>
      Sorry but this browser does not support inline SVG.
    </svg>
  );
  return (
    <>
      <div class="button-wrapper">
        <button class="generate-button" onClick={() => callWithDecreasingVelocity(getRandomState, 80, 25, 400, () => generatePDF(state()))}>
          GENERATE
        </button>
      </div>
      <div class="overflow-scroll">
        <div class="rand-wrapper">
          <img class="field-image" src="/2026/senior.jpg" alt="Senior Game Field" width={1000} />
          {svg}
        </div>
      </div>

      {/* <p>Corresponding to the starting area drawn at the start of the competition, 2 modules can be omitted (those farther away from the starting area)</p> */}
      <p class="code">{state()}</p>
    </>
  );
  function getRandomState() {
    const bag = new MarbleBag(["B", "Y", "G", "B", "Y", "G", "B", "Y", "G", "B", "Y", "G", "B", "Y", "G", "B", "Y", "G", "B", "Y", "G", "B", "Y", "G"]);

    let statestr = "";
    for (let i = 0; i < 12; i++) {
      statestr += bag.draw();
    }

    setState(`SN26-${statestr}`);
  }
}

function getColorFromCode(code: string, index: number) {
  try {
    const letter = code.split("-")[1].charAt(index);
    if (letter === "X") return "rgba(0,0,0,0)";
    if (letter === "G") return "green";
    if (letter === "B") return "blue";
    if (letter === "Y") return "yellow";
  } catch {}
}

function callWithDecreasingVelocity(func: Function, initialDelay: number, decrement: number, minDelay: number, final_hook?: Function) {
  let delay = initialDelay;

  function callFuncWithDelay() {
    func();
    if (delay < minDelay) {
      delay += decrement;
      setTimeout(callFuncWithDelay, delay);
    } else {
      // Final call to ensure it ends on the last state
      // func();
      // Optionally generate PDF here
      if (final_hook) final_hook();
    }
  }

  setTimeout(callFuncWithDelay, initialDelay);
}

function generatePDF(state: string) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [190, 152] });
  doc.setFontSize(16);
  doc.text(`Code: ${state}`, 40, 45);

  for (let i = 0; i < state.split("-")[1].length; i++) {
    const letter = state.split("-")[1].charAt(i);
    let color = "#FFFFFF";
    if (letter === "G") color = "green";
    if (letter === "B") color = "blue";
    if (letter === "Y") color = "yellow";

    const x = 0 + (i % 4) * (38.2 + 12.4);
    const y = 0 + Math.floor(i / 4) * (38.2 + 12.4);

    doc.setFillColor(color);
    doc.rect(x, y, 38.2, 38.2, "F");
    doc.setDrawColor(0);
    doc.rect(x, y, 38.2, 38.2);
  }

  doc.setFillColor("#000000");
  doc.rect(0, 152 - 12.4, 190, 12.4, "F");

  doc.save(`WRO_2026_Senior_Randomization_${state}.pdf`);
  // Add more details as needed
}
