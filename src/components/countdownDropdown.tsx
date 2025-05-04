import "./countdownDropdown.css";

export default function CountdownDropdown() {
  return (
    <div class="dropdown">
      <button class="dropdown-button">Countdown</button>
      <div class="dropdown-content">
        <a href="https://events.worldrobotolympiad.ch/countdown?minutes=75" target="_blank">
          75 min
        </a>
        <a href="https://events.worldrobotolympiad.ch/countdown?minutes=60" target="_blank">
          60 min
        </a>
        <a href="https://events.worldrobotolympiad.ch/countdown?minutes=30" target="_blank">
          30 min
        </a>
        <a href="https://events.worldrobotolympiad.ch/countdown?minutes=2" target="_blank">
          2 min
        </a>
      </div>
    </div>
  );
}
