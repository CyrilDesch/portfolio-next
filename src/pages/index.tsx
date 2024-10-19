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
import { TFuncKey, Trans } from "react-i18next";
import Competence from "../services/ui/Portfolio/Competence";
import ValeurCard from "../services/ui/Portfolio/ValeurCard";

import iconArrowUp from "../assets/img/icons/icon-full-arrow-up.svg";
import iconBacle from "../assets/img/icons/icon-bacle.png";
import iconJava from "../assets/img/icons/technos/java.svg";
import iconGit from "../assets/img/icons/technos/git.svg";
import iconGitHubActions from "../assets/img/icons/technos/github-actions.svg";
import iconTypescript from "../assets/img/icons/technos/typescript.svg";
import iconNodeJs from "../assets/img/icons/technos/nodeJS.svg";
import iconReact from "../assets/img/icons/technos/react.svg";
import iconAngular from "../assets/img/icons/technos/angular.svg";
import iconMetasploit from "../assets/img/icons/technos/metasploit.svg";
import iconBurpsuite from "../assets/img/icons/technos/burpsuite.svg";
import iconWireshark from "../assets/img/icons/technos/wireshark.svg";
import textPresentation from "../assets/img/text/presentation.svg";
import textSelfIntroduction from "../assets/img/text/self-introduction.svg";
import iconDecouverte from "../assets/img/icons/icon-decouverte.svg";
import iconCommunication from "../assets/img/icons/icon-communication.svg";
import iconSearch from "../assets/img/icons/icon-search.svg";
import iconShield from "../assets/img/icons/icon-shield.svg";

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
      <h1 className={"hidden"}>{t("pages_content:home.page_hide_header")}</h1>
      <div id={"presentation"}>
        <section className={"firstContainer"}>
          <div className={"left"}>
            <div>
              <h2>
                {t("pages_content:home.services.title_line1")}
                <br />
                {t("pages_content:home.services.title_line2")}
              </h2>
              <Link className={"clickable"} href={PROJECTS_LINK}>
                {t("pages_content:home.services.projects_link")} &#10132;
              </Link>
            </div>
          </div>
          <div className={"middle"}>
            <h3>
              {t("pages_content:home.last_project.title_line1")}
              <br />
              {t("pages_content:home.last_project.title_line2")}
            </h3>
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
            </a>
            <div>
              <Image
                alt={"icon-arrow-up"}
                className={"w-10 h-10 m-auto pb-2"}
                src={iconArrowUp}
              />
              <p>Bacle</p>
            </div>
          </div>
          <div className={"right"}>
            <div>
              <h3>{t("pages_content:home.developer.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={
                    "pages_content:home.developer.description" as TFuncKey
                  }
                />
              </p>
            </div>
            <div>
              <h3>{t("pages_content:home.software_engineering.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={
                    "pages_content:home.software_engineering.description" as TFuncKey
                  }
                />
              </p>
            </div>
            <div>
              <h3>{t("pages_content:home.security_audit.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={
                    "pages_content:home.security_audit.description" as TFuncKey
                  }
                />
              </p>
            </div>
          </div>
        </section>
        <div className={"secondContainer"}>
          <Image
            alt={"txt-self-introduction"}
            className={"w-full"}
            src={textImageLang}
          />
          <div>
            <h2>{t("pages_content:home.self_introduction.title")}</h2>
            <p>
              <Trans
                components={{ strong: <strong />, br: <br /> }}
                i18nKey={
                  "pages_content:home.self_introduction.description" as TFuncKey
                }
              />
            </p>
          </div>
        </div>

        <div className={"thirdContainer"}>
          <h2>
            {t("pages_content:home.competences.title")}
            <span>{t("pages_content:home.competences.subtitle")}</span>
          </h2>
          <div className={"competencesContainer"}>
            <Competence
              desc={t("pages_content:home.competences.metasploit.desc", {
                returnObjects: true,
              })}
              icon={iconMetasploit}
              title={t("pages_content:home.competences.metasploit.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.burpsuite.desc", {
                returnObjects: true,
              })}
              icon={iconBurpsuite}
              title={t("pages_content:home.competences.burpsuite.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.wireshark.desc", {
                returnObjects: true,
              })}
              icon={iconWireshark}
              title={t("pages_content:home.competences.wireshark.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.java.desc", {
                returnObjects: true,
              })}
              icon={iconJava}
              title={t("pages_content:home.competences.java.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.reactjs.desc", {
                returnObjects: true,
              })}
              icon={iconReact}
              title={t("pages_content:home.competences.reactjs.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.angular.desc", {
                returnObjects: true,
              })}
              icon={iconAngular}
              title={t("pages_content:home.competences.angular.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.nodejs.desc", {
                returnObjects: true,
              })}
              icon={iconNodeJs}
              title={t("pages_content:home.competences.nodejs.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.typescript.desc", {
                returnObjects: true,
              })}
              icon={iconTypescript}
              title={t("pages_content:home.competences.typescript.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.github_actions.desc", {
                returnObjects: true,
              })}
              icon={iconGitHubActions}
              title={t("pages_content:home.competences.github_actions.title")}
            />
            <Competence
              desc={t("pages_content:home.competences.git.desc", {
                returnObjects: true,
              })}
              icon={iconGit}
              title={t("pages_content:home.competences.git.title")}
            />
          </div>
        </div>
        <div className={"fourthContainer"}>
          <h2>{t("pages_content:home.values_section.title")}</h2>
          <div className={"valeursContainer"}>
            <ValeurCard
              icon={iconDecouverte}
              paragraphe={t(
                "pages_content:home.values_section.continuous_learning.paragraph",
              )}
              title={t(
                "pages_content:home.values_section.continuous_learning.title",
              )}
            />
            <ValeurCard
              icon={iconCommunication}
              paragraphe={t(
                "pages_content:home.values_section.collaboration_adaptability.paragraph",
              )}
              title={t(
                "pages_content:home.values_section.collaboration_adaptability.title",
              )}
            />
            <ValeurCard
              icon={iconSearch}
              paragraphe={t(
                "pages_content:home.values_section.curiosity_perseverance.paragraph",
              )}
              title={t(
                "pages_content:home.values_section.curiosity_perseverance.title",
              )}
            />
            <ValeurCard
              icon={iconShield}
              paragraphe={t(
                "pages_content:home.values_section.quality_security.paragraph",
              )}
              title={t(
                "pages_content:home.values_section.quality_security.title",
              )}
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
