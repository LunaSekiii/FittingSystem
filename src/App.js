import "./App.css";

//PRIMEREACT-UI
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

// import { ScrollTop } from "primereact/scrolltop";

//components
import Header from "./components/Header";
import IntroducePage from "./components/IntroducePage";
import FittingPage from "./components/FittingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <IntroducePage />
        <FittingPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
