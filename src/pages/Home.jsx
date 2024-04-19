import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Close from "../assets/images/close.png";
import Menu from "../assets/images/menu.png";

import "../assets/styles/home/home.css";
import SectionOne from "../components/sections/SectionOne";
import SectionTwo from "../components/sections/SectionTwo";
import Footer from "../components/footer/Footer";

const Home = () => {
  // State pour le toggle du menu mobile et la détection de l'affichage mobile
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Effet pour mettre à jour l'état de l'affichage mobile lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);

      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Gérer le clic sur l'icône du menu
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {/* En-tête avec effet de parallaxe */}
      <header className="parallax-bg">
        {/* Bouton de menu burger */}
        <span onClick={handleClick} className="navbar_burger">
          {/* Afficher une icône différente en fonction de l'état du toggle */}
          {toggle ? (
            <img src={Close} alt="close" className="h-close" />
          ) : (
            <img src={Menu} alt="menu" className="h-menu" />
          )}
        </span>

        {/* Menu de navigation */}
        <nav
          style={{
            display: isMobile ? (toggle ? "block" : "none") : "block",
          }}
          className="navbar_first"
        >
          <ul>
            {/* Liens de navigation */}
            <li>
              <NavLink to="/" className="navbar_link">
                Le coté lumineux
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link">
                Le coté obscur
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link">
                L'empire
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link">
                Les droides
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link">
                Les ewoks
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="navbar_link">
                Jabba le huit
              </NavLink>
            </li>
          </ul>
        </nav>

        {isMobile && toggle ? null : ( // Ne pas afficher le logo si c'est mobile et que toggle est vrai
          <section className="h-section">
            <img src={Logo} alt="logo" className="logo" />
          </section>
        )}
      </header>

      {isMobile && toggle ? null : ( // Ne pas afficher le logo si c'est mobile et que toggle est vrai
        <>
          <SectionOne />
          <SectionTwo />

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
