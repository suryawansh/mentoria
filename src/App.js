import "./App.css";
import Cards from "./components/cards/Cards";
import EmployeesSupport from "./components/employees-support/EmployeesSupport";
import FAQ from "./components/faq/Faq";
import Faq from "./components/faq/Faq";

import Footer from "./components/footer/Footer";
import HeaderFile from "./components/header/HeaderFile";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import MentoriaAdv from "./components/mentoria-adv/MentoriaAdv";
import AutoPopupForm from "./components/partner-form/AutoPopupForm";
import PartnerForm from "./components/partner-form/PartnerForm";
import PricingSection from "./components/pricing/pricing-section/PricingSection";
import ClientTestimonials from "./components/testimonials/ClientTestimonials";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <HeaderFile />
      <AutoPopupForm />

      <Hero />
      <EmployeesSupport />
      <ClientTestimonials />
      <Testimonials />
      <PartnerForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
