import { useEffect, useState } from "react";

import Element from "./Elements/Element";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import Stack from "./Elements/Stack";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormReg from "./Elements/FormReg";

const App = () => {
  const [data, setData] = useState();

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

  useEffect(() => {
    handleChange();
  }, []);

  const handleChange = async () => {
    fetch("https://wyn70xjevv.loclx.io/botmedia/get_bot_link")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  };

  console.log(data);

  return (
    <Router>
      <main className="overflow-x-hidden bg-bg-body text-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col gap-[90px] mt-[90px]">
                <Element
                  fio="Stramousov Viktor"
                  desc="Python Developer"
                  lin="https://www.linkedin.com/in/виктор-страмоусов-16647828b/"
                  git="https://github.com/Strong-Finger-sudo"
                />
                <Element
                  fio="Danylo Sushko"
                  desc="Front-End Developer"
                  lin="https://www.linkedin.com/in/%D0%B4%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE-%D1%81%D1%83%D1%88%D0%BA%D0%BE-895206289/"
                  git="https://github.com/DanyloSus"
                  img="photos/ds.jpg"
                />
                <Stack />
                <Footer />
              </div>
            }
          />
          <Route path="/registration" element={<FormReg />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
