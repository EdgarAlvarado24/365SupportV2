import Heading from "@theme/Heading";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Explicaciones Paso a Paso",
    Svg: require("@site/static/img/undraw_stepping_up_g6oo.svg").default,
    description: (
      <>
        Te explicamos cada acción que debes realizar para lograr una actividad.
      </>
    ),
  },
  {
    title: "Estructura Modular",
    Svg: require("@site/static/img/undraw_building_blocks_n0nc.svg").default,
    description: (
      <>
        Dividimos el manual en bloques para que puedas ubicar facilmente la
        información
      </>
    ),
  },
  {
    title: "Ayuda Visual",
    Svg: require("@site/static/img/undraw_Landing_page_re_6xev.svg").default,
    description: (
      <>
        Incluimos imagenes para que puedas ubicar mejor las funciones de la
        plataforma.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
