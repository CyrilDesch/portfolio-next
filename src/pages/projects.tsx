import React from "react";
import SizedSection from "../services/ui/SizedSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import AppLayout from "../services/ui/Layout/AppLayout";
import BaseSeo from "../services/seo/BaseSeo";
import { jsonLdScriptProps } from "react-schemaorg";
import { Organization } from "schema-dts";

const Projects = (): JSX.Element => {
  const { t } = useTranslation(["pages_content", "website"]);

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
      <SizedSection
        className={
          "flex flex-row z-10 min-h-[23rem] items-start md:min-h-[26rem] justify-center lg:justify-between"
        }
      >
        <p>flops</p>
      </SizedSection>
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
