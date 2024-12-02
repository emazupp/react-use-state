import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import { languages } from "./data/languages";

function App() {
  return (
    <>
      <Header />
      <Main data={languages} />
    </>
  );
}

export default App;
