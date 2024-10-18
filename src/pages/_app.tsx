import "../assets/styles/global.scss";
import { AppProps } from "next/app";
import React from "react";
import { appWithTranslation } from "next-i18next";
import { twMerge } from "tailwind-merge";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import nextI18NextConfig from "../../next-i18next.config";
import { ProvideToast } from "../services/toast-notifications";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { AppConfig } from "../services/utils/AppConfig";
import SakuraAnimation from "../services/animation/sakura/SakuraAnimation";

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-montserrat",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Head>
        <meta
          content={"width=device-width, initial-scale=1"}
          name={"viewport"}
        />
        <title key={"title"}>{`${AppConfig.siteName}`}</title>
      </Head>
      <div
        className={twMerge(
          montserrat.variable,
          "flex flex-col w-full min-h-screen p-0 m-0 bg-appBgColor overflow-x-hidden",
        )}
      >
        <ProvideToast>
          <GoogleAnalytics
            gaMeasurementId={GA_MEASUREMENT_ID}
            strategy={"afterInteractive"}
            trackPageViews
          />
          <SakuraAnimation />
          <div className={"w-[100vw]"}>
            <Component {...pageProps} />
          </div>
        </ProvideToast>
      </div>
    </React.StrictMode>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
