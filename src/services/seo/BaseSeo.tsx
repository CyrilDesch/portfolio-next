import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebPage } from "schema-dts";
import { AppConfig } from "../utils/AppConfig";

interface BaseSeoProps {
  title?: string;
  noBaseTitle?: boolean;
  description?: string;
  children?: ReactNode;
  noIndex?: boolean;
}

const BaseSeo = ({
  title,
  noBaseTitle = false,
  description,
  children,
  noIndex = false,
}: BaseSeoProps): ReactElement => {
  const { pathname, query } = useRouter();

  const queryString = Object.entries(query)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join("&");
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(
        value as string,
      )}`;
    })
    .join("&");

  const completePathname = `${pathname}?${queryString}`;

  return (
    <>
      <Head>
        <title key={"title"}>{`${
          noBaseTitle ? "" : AppConfig.siteName + " - "
        }${title}`}</title>
        <meta content={description} name={"description"} />
        {noIndex && <meta content={"noindex,nofollow"} name={"robots"} />}
        <meta content={"website"} property={"og:type"} />
        <meta
          content={`${AppConfig.siteName} - ${title}`}
          property={"og:title"}
        />
        <meta content={description} property={"og:description"} />
        <meta
          content={`${process.env.REACT_APP_HOST}/assets/logo.png`}
          property={"og:image"}
        />
        <meta
          content={`${process.env.REACT_APP_HOST}${completePathname}`}
          property={"og:url"}
        />
        <script
          {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${process.env.REACT_APP_HOST}${completePathname}/#webpage`,
            url: `${process.env.REACT_APP_HOST}${completePathname}`,
            name: "portfolio",
          })}
        />
        {children}
      </Head>
    </>
  );
};

export default BaseSeo;
