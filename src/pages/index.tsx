import React, { ReactElement, useMemo } from "react";
import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import type { GetStaticProps } from "next";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next/pages";
import AppLayout from "../services/ui/Layout/AppLayout";
import BaseSeo from "../services/seo/BaseSeo";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization } from "schema-dts";
import Link from "next/link";
import { PROJECTS_LINK } from "../routes";
import Image from "next/image";
import { Trans } from "react-i18next";
import Competence from "../services/ui/Competence";
import iconArrowUp from "../assets/img/icons/icon-full-arrow-up.svg";
import iconSding from "../assets/img/icons/icon-sding.png";
import iconJava from "../assets/img/icons/technos/java.svg";
import iconGit from "../assets/img/icons/technos/git.svg";
import iconGitHubActions from "../assets/img/icons/technos/github-actions.svg";
import iconTypescript from "../assets/img/icons/technos/typescript.svg";
import iconNodeJs from "../assets/img/icons/technos/nodeJS.svg";
import iconReact from "../assets/img/icons/technos/react.svg";
import iconScala from "../assets/img/icons/technos/scala.svg";
import textPresentation from "../assets/img/text/presentation.svg";
import textSelfIntroduction from "../assets/img/text/self-introduction.svg";

const Home = (): ReactElement => {
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
        <section id={"firstContainer"}>
          <div className={"left"}>
            <div>
              <h2>
                {t("pages_content:home.services.title_line1")}
                <br />
                {t("pages_content:home.services.title_line2")}
                <br />
                {t("pages_content:home.services.title_line3")}
              </h2>
              <Link className={"clickable"} href={PROJECTS_LINK}>
                {t("pages_content:home.services.projects_link")}
                &nbsp;&nbsp;&#10132;
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
              href={"https://github.com/CyrilDesch/SDING"}
              rel={"noreferrer"}
              target={"_blank"}
            >
              <Image
                alt={"image-project"}
                className={"icon-project"}
                src={iconSding}
              />
            </a>
            <div>
              <Image
                alt={"icon-arrow-up"}
                className={"w-10 h-10 m-auto pb-2"}
                src={iconArrowUp}
              />
              <p>SDING</p>
            </div>
          </div>
          <div className={"right"}>
            <div>
              <h3>{t("pages_content:home.software_engineering.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={
                    "pages_content:home.software_engineering.description"
                  }
                />
              </p>
            </div>
            <div>
              <h3>{t("pages_content:home.agentic_ai.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={"pages_content:home.agentic_ai.description"}
                />
              </p>
            </div>
            <div>
              <h3>{t("pages_content:home.developer.title")}</h3>
              <p>
                <Trans
                  components={{ strong: <strong /> }}
                  i18nKey={"pages_content:home.developer.description"}
                />
              </p>
            </div>
          </div>
        </section>
        <section id={"secondContainer"}>
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
                i18nKey={"pages_content:home.self_introduction.description"}
              />
            </p>
          </div>
        </section>
        <section id={"thirdContainer"}>
          <h2>
            {t("pages_content:home.competences.title")}
            <span>{t("pages_content:home.competences.subtitle")}</span>
          </h2>
          <div className={"competencesContainer"}>
            <Competence
              desc={
                t("pages_content:home.competences.scala.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconScala}
              title={t("pages_content:home.competences.scala.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.java.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconJava}
              title={t("pages_content:home.competences.java.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.reactjs.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconReact}
              title={t("pages_content:home.competences.reactjs.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.nodejs.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconNodeJs}
              title={t("pages_content:home.competences.nodejs.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.typescript.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconTypescript}
              title={t("pages_content:home.competences.typescript.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.github_actions.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconGitHubActions}
              title={t("pages_content:home.competences.github_actions.title")}
            />
            <Competence
              desc={
                t("pages_content:home.competences.git.desc", {
                  returnObjects: true,
                }) as string[]
              }
              icon={iconGit}
              title={t("pages_content:home.competences.git.title")}
            />
          </div>
        </section>
        <section id={"fourthContainer"}>
          <h2>
            {t("pages_content:home.resume.title")}
            <span>{t("pages_content:home.resume.subtitle")}</span>
          </h2>
          <div className={"resumeContainer"}>
            <div className={"resumeColumn"}>
              <h3>{t("pages_content:home.resume.experience_label")}</h3>
              {(
                t("pages_content:home.resume.experiences", {
                  returnObjects: true,
                }) as {
                  company: string;
                  industry: string;
                  role: string;
                  date: string;
                  bullets: string[];
                }[]
              ).map((exp, i) => (
                <div key={i} className={"resumeEntry"}>
                  <div className={"entryTop"}>
                    <span className={"company"}>{exp.company}</span>
                    <span className={"date"}>{exp.date}</span>
                  </div>
                  <p className={"role"}>{exp.role}</p>
                  <p className={"industry"}>{exp.industry}</p>
                  <ul>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={"resumeColumn"}>
              <h3>{t("pages_content:home.resume.education_label")}</h3>
              {(
                t("pages_content:home.resume.education", {
                  returnObjects: true,
                }) as {
                  school: string;
                  degree: string;
                  field: string;
                  date: string;
                  bullets: string[];
                }[]
              ).map((edu, i) => (
                <div key={i} className={"resumeEntry"}>
                  <div className={"entryTop"}>
                    <span className={"company"}>{edu.school}</span>
                    <span className={"date"}>{edu.date}</span>
                  </div>
                  <p className={"role"}>{edu.degree}</p>
                  <p className={"industry"}>{edu.field}</p>
                  <ul>
                    {edu.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
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
