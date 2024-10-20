import React, { ReactElement, useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import AppLayout from "../services/ui/Layout/AppLayout";
import BaseSeo from "../services/seo/BaseSeo";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization } from "schema-dts";
import projectDB from "../assets/projectsDB";
import ProjectCard from "../services/ui/ProjectCard";
import realisationsText from "../assets/img/text/realisations.svg";
import achievementsText from "../assets/img/text/achievements.svg";
import Image from "next/image";

const Projects = (): ReactElement => {
  const {
    t,
    i18n: { language },
  } = useTranslation(["pages_content", "website"]);

  const textImageLang = useMemo(() => {
    switch (language) {
      case "fr":
        return realisationsText;
      case "en":
        return achievementsText;
      default:
        return achievementsText;
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
      <div id={"projets"}>
        <section id={"firstContainer"}>
          <Image alt={"realisation"} className={"w-full"} src={textImageLang} />
          <div className={"mt-[-2px]"}>
            {projectDB.map((item) => (
              <ProjectCard
                key={item.title}
                image={item.image}
                redirection={item.redirection}
                title={item.title}
                typeProject={item.typeProject}
              />
            ))}
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

export default Projects;
