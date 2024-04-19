import React from "react";
import Kyloren from "../../assets/images/kyloren-2x.jpg";
import Robot from "../../assets/images/robot.jpg";

import "../../assets/styles/section/section.css";

const SectionTwo = () => {
  return (
    <main>
      {/* Section principale */}
      <section className="section-two">
        {/* Article 1 : Image de Kylo Ren */}
        <article className="s2-article1">
          <img src={Kyloren} alt="kyloren" className="kyloren" />
        </article>

        {/* Article 2 : Titre */}
        <article className="s2-article2">
          <h3>A long time ago, in a galaxy far, far away…</h3>
        </article>

        {/* Article 3 : Image de Robot et texte introductif */}
        <article className="s2-article3">
          <span className="image-robot">
            <img src={Robot} alt="robot" className="robot" />
            <div className="white-bg"></div>
          </span>

          {/* Paragraphe introductif */}
          <p>
            {/* Texte introductif */}
            <span>La Guerre des étoiles</span> (titre original
            <span> Star Wars</span>, soit littéralement Guerres Stellaires ) est
            une épopée cinématographique de science-fiction créée par George
            Lucas, considérée comme un élément phare du space opera. Prévue à la
            base pour être une suite de trois trilogies (triptyque), Lucas fut
            contraint, par manque de moyens techniques, de commencer par la
            seconde trilogie (<span>l'Épisode IV - Un nouvel espoir</span>) en
            1977. La série connut un succès phénoménal partout dans le monde et
            engendra une très importante communauté de fans. Sans prétendre
            expliquer le succès du premier film (s'il y avait une recette, cela
            se saurait), on peut, toutefois, noter que, malgré le manque de
            moyens (le budget était relativement modeste, les acteurs presque
            inconnus) :
          </p>
        </article>

        {/* Article 4 : Liste des points forts du film */}
        <article className="s2-article4">
          {/* Liste des points forts */}
          <ul>
            <li>
              {/* Point fort 1 */}
              Il fait appel à des références connues et appréciées des jeunes de
              l'époque : films de cape et d'épée, westerns, péplums, contes de
              fées et même <span>le Seigneur des Anneaux</span> de J.R.R
              Tolkien; cette oeuvre n'apparaît pas comme de la science fiction
              au sens strict mais plutôt comme du space fantasy.
            </li>
            <li>
              {/* Point fort 2 */}
              Les effets spéciaux, supervisés par Ken Raiston, étaient
              réellement novateurs, avec notamment la participation de John
              Dykstra (qui a également participé au premier film de
              <span> Star Trek</span>), qui avait développé une nouvelle manière
              d'animer les maquettes des vaisseaux en coordonnant leurs
              mouvements par ordinateur (Dykystraflex).
            </li>
            <li>
              {/* Point fort 3 */}
              Le film a développé un univers cohérent, avec, comme préocuppation
              constante, autant la création d'une ambiance que l'action
              proprement dite.
            </li>
            <li>
              {/* Point fort 4 */}
              La musique, composée par John Williams, introduit des thèmes
              récurrents et des leitmotivis (procédé classique mais renforçant
              la cohérence).
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default SectionTwo;
