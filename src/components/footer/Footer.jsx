import React from "react";
import { Link } from "react-router-dom";

import Storm from "../../assets/images/stormtroopers-2x.jpg";
import Fb from "../../assets/images/icon_facebook.png";
import Insta from "../../assets/images/icon_instagram.png";
import Twitter from "../../assets/images/icon_twitter.png";

import "../../assets/styles/footer/footer.css";

const Footer = () => {
  return (
    // Section du pied de page
    <footer>
      {/* Section contenant l'image des Stormtroopers */}
      <section className="f-section1">
        <img src={Storm} alt="storm" className="storm" />
      </section>

      {/* Section pour les liens et les icônes de réseaux sociaux*/}
      <section className="section-desktop">
        <section className="f-section2">
          <p>
            {/* Texte de droits d'auteur */}
            <strong>TM Lucasfilm</strong> Ltd. All Rights Reserved.
          </p>
        </section>

        <section className="f-section3">
          {/* Articles contenant des listes de liens */}
          <article className="f-section-article1">
            {/* Liste de liens juridiques */}
            <ul className="f-section-list1">
              <li>
                <Link to="/" className="footer_link">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  Legal Notices
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Liste de liens supplémentaires */}
            <ul className="f-section-list2">
              <li>
                <Link to="/" className="footer_link">
                  Your California Privacy Rights
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  Star Wars at Disney Store
                </Link>
              </li>
              <li>
                <Link to="/" className="footer_link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </article>

          {/* Article contenant les icônes de réseaux sociaux */}
          <article className="f-section-article2">
            <p>Follow Star Wars</p>

            {/* Icônes de réseaux sociaux */}
            <span>
              <img src={Fb} alt="facebook" className="icon" />
              <img src={Twitter} alt="twitter" className="icon" />
              <img src={Insta} alt="instagram" className="icon" />
            </span>
          </article>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
