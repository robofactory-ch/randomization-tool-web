import { Title } from "solid-start";
import Elementary2025 from "~/components/Elementary_2025";
import Junior2025 from "~/components/Junior_2025";
import Senior2025 from "~/components/Senior_2025";
export default function Home() {
  return (
    <main>
      <Title>Randomizations</Title>
      <h1>Senior</h1>
      <Senior2025 />
      <hr></hr>
      <h1>Junior</h1>
      <Junior2025 />
      <hr></hr>
      <h1>Elementary</h1>
      <Elementary2025 />
    </main>
  );
}
