import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Elementary2023 from "~/components/Elementary_2023";
import Junior2023 from "~/components/Junior_2023";
import Senior2023 from "~/components/Senior_2023";
export default function Home() {
  return (
    <main>
      <Title>Junior Randomizations</Title>
      <h1>Junior</h1>
      <Junior2023 />
    </main>
  );
}
