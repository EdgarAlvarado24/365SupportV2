import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageApps from "../components/HomepageFeatures/apps";
import HomepageArticles from "../components/HomepageFeatures/articles";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img className="banner-img" src="./img/365-manual.png" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/instalacion-y-configuracion/instalacion-y-actualizacion/instalacion-de-365connect-pro"
          >
            GUIA DE USUARIO 365CONNECT PRO
          </Link>
        </div>
        <p></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/manual-y-faq/faq/preguntas-frecuentes"
          >
            PREGUNTAS FRECUENTES
          </Link>
        </div>
        <p></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/solucion-de-problemas/365software/solucion-de-problemas"
          >
            SOLUCION DE PROBLEMAS
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <script src="/node_modules/typesense/dist/typesense.min.js"></script>
      <main>
        <HomepageFeatures />
        <HomepageArticles />
        <HomepageApps />
      </main>
    </Layout>
  );
}
