import Heading from "@theme/Heading";
import React from "react";
import styles from "./styles.module.css";

const ArticlesList = [
  {
    image: "./img/Monitoreo.png",
    title:
      "365Connect Pro, la mejor herramienta para el operador de monitoreo.",
    description:
      "Desde grandes empresas de monitoreo de dispositivos de seguridad hasta pequeñas empresas que desean autogestionar sus dispositivos de seguridad y rastreo.",
    imageAlign: "left",
  },
  {
    image: "./img/laptop-pc-table.png",
    title: "Acceso multiplataforma",
    description:
      " 365connect es una applicación web, por lo que podras acceder a 365Connect desde tu computador personal o dispositivo movil utilizando el navegador web de tu preferencia.",
    imageAlign: "right",
  },
];

function Articles({ image, title, description, imageAlign }) {
  let direcction = imageAlign == "right" ? "gridBlock-reverse" : "gridBlock";
  return (
    <div className={direcction + " margin-bottom--lg margin-horiz--lg"}>
      <div className="text--left ">
        <img className="banner-img" src={image} />
      </div>
      <div className="text--center padding-vert--xl padding-horiz--xl">
        <Heading as="h3">{title}</Heading>
        <p className="justify-text">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageArticles() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="">
          {ArticlesList.map((props, idx) => (
            <Articles key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
