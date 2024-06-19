import "./assets/styles/global.scss";
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";
import { Main } from "./sections/Main";
import { Portfolio } from "./sections/Portfolio";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
