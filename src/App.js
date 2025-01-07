import "./App.css";
import Cards from "./components/cards/Cards";

import Footer from "./components/footer/Footer";
import HeaderFile from "./components/header/HeaderFile";
import HowItWorks from "./components/how-it-works/HowItWorks";
import MentoriaAdv from "./components/mentoria-adv/MentoriaAdv";
import PricingSection from "./components/pricing/pricing-section/PricingSection";

function App() {
  return (
    <div className="App">
      <HeaderFile />
      <Cards />
      <HowItWorks />
      <MentoriaAdv />

      <Footer />
    </div>
  );
}

export default App;
