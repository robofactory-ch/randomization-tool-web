import { Title } from "@solidjs/meta";
import Elementary2026 from "~/components/Elementary_2026";
import Junior2026 from "~/components/Junior_2026";
import Senior2026 from "~/components/Senior_2026";
export default function Home() {
  return (
    <main>
      <Title>Randomizations</Title>
      <h1>Senior</h1>
      <Senior2026 />
      <hr></hr>

      <h1>Junior</h1>
      <Junior2026 />
      <hr></hr>
      <h1>Elementary</h1>
      <Elementary2026 />
    </main>
  );
}
