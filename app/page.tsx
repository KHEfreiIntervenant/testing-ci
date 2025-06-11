import Counter from "./Counter";
import List from "./List";

export default function Home() {
  return (
    // center middle page
    <div className="flex justify-center items-center h-screen">
      <Counter />
      <List />
    </div>
  );
}
