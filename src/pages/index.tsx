import React, { useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import AppLayout from "../services/ui/Layout/AppLayout";
import BaseSeo from "../services/seo/BaseSeo";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization } from "schema-dts";
import Link from "next/link";
import { PROJECTS_LINK } from "../routes";
import Image from "next/image";

import iconBacle from "../assets/img/icons/icon-bacle.png";
import iconPlay from "../assets/img/icons/icon-play.svg";
import AndroidIcon from "../assets/img/icons/technos/android.svg";
import CssHtmlIcon from "../assets/img/icons/technos/css_html.svg";
import FirebaseIcon from "../assets/img/icons/technos/firebase.svg";
import GitHubIcon from "../assets/img/icons/technos/github.svg";
import JavascriptIcon from "../assets/img/icons/technos/javascript.svg";
import NodeJSIcon from "../assets/img/icons/technos/nodeJS.svg";
import ReactIcon from "../assets/img/icons/technos/react.svg";
import FlutterIcon from "../assets/img/icons/technos/flutter.svg";
import Competence from "../services/ui/Portfolio/Competence";
import ValeurCard from "../services/ui/Portfolio/ValeurCard";
import textPresentation from "../assets/img/text/presentation.svg";
import textSelfIntroduction from "../assets/img/text/self-introduction.svg";

const Home = (): JSX.Element => {
  const {
    t,
    i18n: { language },
  } = useTranslation(["pages_content", "website"]);

  const textImageLang = useMemo(() => {
    switch (language) {
      case "fr":
        return textPresentation;
      case "en":
        return textSelfIntroduction;
      default:
        return textSelfIntroduction;
    }
  }, [language]);

  return (
    <AppLayout>
      <BaseSeo
        description={t("pages_content:home.page_description")}
        title={t("pages_content:home.page_title")}
      >
        <script
          {...jsonLdScriptProps<Organization>({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${process.env.REACT_APP_HOST}/#organization`,
            url: process.env.REACT_APP_HOST,
            name: "Portfolio",
            logo: `${process.env.REACT_APP_HOST}/assets/logo.png`,
          })}
        />
      </BaseSeo>
      <div id={"presentation"}>
        <div className={"firstContainer"}>
          <div className={"left"}>
            <div>
              <h1>
                En quoi je
                <br />
                peux être
                <br />
                utile ?
              </h1>
              <Link className={"clickable"} href={PROJECTS_LINK}>
                Mes projets &#10132;
              </Link>
            </div>
          </div>
          <div className={"middle"}>
            <h1>
              Mon dernier
              <br />
              projet
            </h1>
            <a
              className={"buttonPlay clickable"}
              href={"https://www.youtube.com/watch?v=YYRwBxx2GbQ"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Image
                alt={"image-project"}
                className={"icon-bacle"}
                src={iconBacle}
              />
              <Image alt={"icon-play"} className={"icon-play"} src={iconPlay} />
            </a>
            <p>Bacle</p>
          </div>
          <div className={"right"}>
            <div>
              <h1>Développer</h1>
              <p>
                {" "}
                Je suis développeur mobile et web spécialisé en React Native et
                ReactJS afin créer des applications sur ces plateformes.
              </p>
            </div>
            <div>
              <h1>Conseiller</h1>
              <p>
                J'accompagne les entreprises dans leur digitalisation en tant
                que développeur et consultant sur des projets d'applications web
                et mobiles.
              </p>
            </div>
            <div>
              <h1>Organiser</h1>
              <p>
                J’ai une aspiration certaine pour les méthodes agiles et la
                communication au sein d'un projet.
              </p>
            </div>
          </div>
        </div>
        <div className={"secondContainer"}>
          <Image
            alt={"text-self-introduction"}
            className={"w-full"}
            src={textImageLang}
          />
          <div>
            <h1>Passionné par l'apprentissage et par la création</h1>
            <p>
              Je m'appelle Cyril Deschamps. Ayant toujours été autodidacte, très
              débrouillard et d’une grande ouverture d’esprit, j’ai acquis de
              nombreuses connaissances dans divers domaines et notamment dans le
              développement informatique et la création de projet. Par cet
              apprentissage autodidacte et universitaire, la programmation et
              l'entrepreneuriat sont devenues mes principales passions. De plus,
              mes études d’informatiques m’ont beaucoup apporté dans ces deux
              passions.{" "}
              <strong>
                Aujourd’hui, mon rôle est d’accompagner les entreprises dans la
                réalisation et la maintenance de leur application mobile pour
                mener à bien leurs projets.
              </strong>
            </p>
          </div>
        </div>
        <div className={"thirdContainer"}>
          <h1>COMPÉTENCES</h1>
          <h2>TECHNIQUES</h2>
          <div className={"competencesContainer"}>
            <Competence
              desc={["○ Maitrise complète", "○ Tout type de projet"]}
              icon={ReactIcon}
              title={"React / React Native"}
            />
            <Competence
              desc={["○ Maitrise complète", "○ Création d'API"]}
              icon={NodeJSIcon}
              title={"NodeJS"}
            />
            <Competence
              desc={["○ Maitrise complète"]}
              icon={JavascriptIcon}
              title={"Typescript / Javascript"}
            />
            <Competence
              desc={["○ Maitrise légère"]}
              icon={FlutterIcon}
              title={"Flutter"}
            />
            <Competence
              desc={["○ Niveau intermédiaire"]}
              icon={AndroidIcon}
              title={"Android / Java"}
            />
            <Competence
              desc={["○ Maitrise complète"]}
              icon={CssHtmlIcon}
              title={"HTML / CSS"}
            />
            <Competence
              desc={[
                "○ Bonne connaissance des outils",
                "○ Utilisation de Firestore",
              ]}
              icon={FirebaseIcon}
              title={"Firebase"}
            />
            <Competence
              desc={["○ Maitrise complète", "○ Indispensable"]}
              icon={GitHubIcon}
              title={"GitHub (versioning)"}
            />
          </div>
        </div>
        <div className={"fourthContainer"}>
          <h1>MES VALEURS</h1>
          <div className={"valeursContainer"}>
            <ValeurCard
              paragraphe={
                "Peu importe votre idée et la quantité de travail demandée, c’est avec toute ma bonne volonté que je vous aiderai et vous conseillerai pour mener à bien vos projets."
              }
              presetIcon={"succes"}
              title={"Mon optimisme, mon ambition et mon goût de la réussite"}
            />
            <ValeurCard
              paragraphe={
                "La création informatique est ma passion. Le fait de pouvoir créer n'importe quel projet, seul ou à plusieurs, m’a permis de m’épanouir."
              }
              presetIcon={"passion"}
              title={"Je suis passionné"}
            />
            <ValeurCard
              paragraphe={
                "Ayant toujours été très débrouillard, j’ai appris de nombreuses choses seul et je suis finalement autodidacte. Je ressens le besoin de comprendre tout ce qui m’entoure pour évoluer."
              }
              presetIcon={"decouverte"}
              title={"L'amour de la découverte"}
            />
            <ValeurCard
              paragraphe={
                "Je donne beaucoup d'importance à la communication dans un projet, surtout entre les différentes branches de métiers. Je ferai mon maximum pour cerner totalement le besoin de votre application et répondre à vos demandes."
              }
              presetIcon={"communication"}
              title={"Ne pas se précipiter !"}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? "en",
      ["trip", "validations", "pages_content", "website"],
      nextI18NextConfig,
    )),
  },
});

export default Home;
