import React, { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import AppLayout from "../services/ui/Layout/AppLayout";

const Page404 = (): ReactElement => {
  const { t } = useTranslation("website");

  return (
    <AppLayout>
      <div
        className={"flex flex-col items-center justify-center py-40"}
        style={{
          background:
            "linear-gradient(36deg, rgb(220, 199, 204) 0%, rgb(55, 47, 61) 100%)",
        }}
      >
        <div className={"text-center"}>
          <h1
            className={"text-6xl font-extrabold text-white animate-bounce mb-6"}
          >
            {t("not-found.title")}
          </h1>
          <p className={"text-xl !text-white mb-4"}>{t("not-found.message")}</p>
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? "en",
      ["website"],
      nextI18NextConfig,
    )),
  },
});

export default Page404;
