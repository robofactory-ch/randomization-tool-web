import { Title } from "solid-start";
import Elementary2024 from "~/components/Elementary_2024";
import Junior2024 from "~/components/Junior_2024";
import Senior2024 from "~/components/Senior_2024";
export default function Home() {
  return (
    <main>
      <Title>Randomizations</Title>
      <h1>Senior</h1>
      <Senior2024 />
      <hr></hr>
      <h1>Junior</h1>
      <Junior2024 />
      <hr></hr>
      <h1>Elementary</h1>
      <Elementary2024 />
    </main>
  );
}
