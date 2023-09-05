import { useEffect } from "react";

import Element from "./Elements/Element";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Stack from "./Elements/Stack";

const App = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
    const revealsT = document.querySelectorAll(".revealT");
    for (let i = 0; i < revealsT.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealsT[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        revealsT[i].classList.add("active");
      }
    }
    const revealsI = document.querySelectorAll(".revealI");
    for (let i = 0; i < revealsI.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealsI[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        revealsI[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <Element />
      <Element />
      <Stack />
      <Footer />
    </main>
  );
};

export default App;
