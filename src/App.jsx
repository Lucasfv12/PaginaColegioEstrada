import React, { useEffect, useState } from "react";
import TopBar from "./Components/TopBar";
import CarouselComponent from "./Components/CarouselComponent";
import LevelBoxes from "./Components/LevelBoxes";
import NavBar from "./Components/NavBar"; // Asegúrate de importar el NavBar
import "./styles/App.scss"; // Asegúrate de tener este archivo

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <TopBar />
      <NavBar className={scrolled ? "scrolled" : ""} />{" "}
      {/* Aquí pasamos la clase */}
      <CarouselComponent />
      <LevelBoxes />
    </div>
  );
}

export default App;
