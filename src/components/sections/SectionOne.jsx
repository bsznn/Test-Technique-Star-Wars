import React, { useEffect, useRef, useState } from "react";

import Ads from "../../assets/images/ads.jpg";
import "../../assets/styles/section/section.css";

const SectionOne = () => {
  // État pour fixer/défixer la publicité (ads)
  const [isAdsFixed, setIsAdsFixed] = useState(true);

  // Références pour la section principale et la publicité (ads)
  const sectionRef = useRef(null);
  const adsRef = useRef(null);

  // Effet pour mettre à jour isAdsFixed lors du défilement de la fenêtre
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !adsRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const adsHeight = adsRef.current.offsetHeight;

      if (
        window.scrollY > sectionRect.top + window.scrollY &&
        window.scrollY < sectionRect.bottom + window.scrollY - adsHeight
      ) {
        setIsAdsFixed(true);
      } else {
        setIsAdsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* Section principale */}
      <section ref={sectionRef} className="section-one">
        {/* Contenu de la section */}
        <article className="s1-article">
          <h3>Star Wars, The Force Awakens</h3>
          <p>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « Résistance », combattent les vestiges de l'Empire
            réunis sous la bannière du « Premier Ordre ».
          </p>
          <p>
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
            et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
            même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
            planète désertique Jakku, va faire la rencontre de Finn, un
            Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
          </p>
          <p>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « Résistance », combattent les vestiges de l'Empire
            réunis sous la bannière du « Premier Ordre ».
          </p>
          <p>
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
            et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
            même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
            planète désertique Jakku, va faire la rencontre de Finn, un
            Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
          </p>
          <p>
            Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini
            avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
            devenus la « Résistance », combattent les vestiges de l'Empire
            réunis sous la bannière du « Premier Ordre ».
          </p>
          <p>
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador
            et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
            même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la
            planète désertique Jakku, va faire la rencontre de Finn, un
            Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
          </p>
        </article>

        {/* Publicité */}
        <article
          ref={adsRef}
          className={isAdsFixed ? "s1-ads fixed" : "s1-ads"}
        >
          <img src={Ads} alt="ads" className="img-ads" />
        </article>
      </section>
    </main>
  );
};

export default SectionOne;
