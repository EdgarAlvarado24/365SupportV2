import Heading from "@theme/Heading";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const AppsList = [
  {
    description:
      "Es una aplicación en la nube para el control de rondas con el poder de reportar incidencias mediante imagenes, audios, videos y más.",
    image: "./img/logo_365_guard.png",
    imageAlign: "top",
    title: "365Guard",
  },
  {
    description:
      "365Client es una aplicacion global de seguridad para el control - gestión y monitoreo movil. Esta App funciona para la gestión de sus dispositivos conectados a 365Connect",
    image: "./img/logo_365_client.png",
    imageAlign: "top",
    title: "365Client",
  },
  {
    description:
      "365SOS App de seguridad personal para el reporte de emergencias en tiempo real.",
    image: "./img/logo_365_sos.png",
    imageAlign: "top",
    title: "365Sos",
  },
];

function Apps({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageApps() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AppsList.map((props, idx) => (
            <Apps key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
