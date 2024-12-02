import { useState } from "react";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import { languages } from "./data/languages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main data={languages} />
    </>
  );
}

export default App;
