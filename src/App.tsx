import { useState } from "react";
import { Select } from "./Select";
const options = [
  { lable: "first", value: 1 },
  { lable: "second", value: 2 },
  { lable: "third", value: 3 },
  { lable: "forth", value: 4 },
  { lable: "fifth", value: 5 },
];
function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <>
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </>
  );
}

export default App;
