import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Elementary2023 from "~/components/Elementary_2023";
import Junior2023 from "~/components/Junior_2023";
import Senior2023 from "~/components/Senior_2023";
export default function Home() {
  return (
    <main>
      <Title>Senior Randomizations</Title>
      <h1>Senior</h1>
      <Senior2023 />
    </main>
  );
}
