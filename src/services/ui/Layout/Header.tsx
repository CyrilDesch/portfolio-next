/* eslint-disable react/jsx-curly-brace-presence */
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import appIcon from "../../../assets/img/icons/icon-app.svg";
import burgerMenuIcon from "../../../assets/img/icons/icon-burger.svg";
import arrowUpIcon from "../../../assets/img/icons/icon-arrow-up.svg";
import { SocialIcon } from "react-social-icons";
import useTxtRotate from "../../utils/useTxtRotate";
import { BASE_LINK, PROJECTS_LINK } from "../../../routes";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../../routes/external";
import useScroll from "../../utils/useScroll";
import { ReactElement, useState } from "react";

import iconFrenchFlag from "../../../assets/img/icons/icon-french.svg";
import iconEnglishFlag from "../../../assets/img/icons/icon-english.svg";

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation("website");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useTxtRotate(`// ${t("header.todo")}`);
  const { scrollTo, isScrolled } = useScroll();

  function switchLanguage() {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, {
      locale: i18n.language === "fr" ? "en" : "fr",
    });
  }

  return (
    <header id="header">
      <div className={"left"}>
        <nav>
          <ul className={"menu"}>
            <li>
              <Image alt={"icon-app"} className={"icon"} src={appIcon} />
            </li>
            <li className={"menuContainer"}>
              <Link
                className={router.pathname === BASE_LINK ? "active" : ""}
                href={BASE_LINK}
              >
                {t("header.presentation")}
              </Link>
              <Link
                className={router.pathname === PROJECTS_LINK ? "active" : ""}
                href={PROJECTS_LINK}
              >
                {t("header.projects")}
              </Link>
            </li>
            <li>
              <button
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                style={{
                  width: 40,
                  height: 40,
                  position: "relative",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Image alt={"icon-menu"} src={burgerMenuIcon} />
              </button>
            </li>
          </ul>
        </nav>

        <div className={"menuLink"}>
          <SocialIcon
            bgColor={"white"}
            fgColor="transparent"
            target={"_blank"}
            url={GITHUB_LINK}
          />
          <SocialIcon
            bgColor={"white"}
            fgColor="transparent"
            target={"_blank"}
            url={LINKEDIN_LINK}
          />
          <div
            className="bg-white rounded-full w-[50px] h-[50px] cursor-pointer flex items-center justify-center"
            onClick={switchLanguage}
          >
            {i18n.language === "fr" ? (
              <Image
                alt={"icon-english"}
                height={22}
                src={iconEnglishFlag}
                width={22}
              />
            ) : (
              <Image
                alt={"icon-french"}
                height={22}
                src={iconFrenchFlag}
                width={22}
              />
            )}
          </div>
        </div>
        <span className="code">
          <p>{`public class CyrilDeschamps {`}</p>
          <p>{`   public CyrilDeschamps() {`}</p>
          <p>{`      this.job = "${t("header.job")}";`}</p>
          <p>{`      this.newJob = "${t("header.newJob")}";`}</p>
          <p>{`      if(year == 2025)`}</p>
          <p>{`         // TODO :`}</p>
          <p>
            {"         "}
            <span className="txt-rotate" data-period="2000" />
          </p>
          <p>{`   }`}</p>
          <p>{`}`}</p>
        </span>
      </div>
      <div className={"right"}>
        <p className={"text"}>FREELANCE</p>
      </div>
      {isScrolled ? (
        <Image
          alt="icon-up"
          className="iconUp"
          onClick={() => scrollTo(0)}
          src={arrowUpIcon}
        />
      ) : null}

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-320px",
          width: 300,
          height: "100vh",
          background: "#3e3444",
          zIndex: 1001,
          transition: "right 0.3s ease",
          padding: "2.5em 1.5em 0",
          fontSize: "1.15em",
        }}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#bdc3c7",
            fontSize: "1.2em",
          }}
        >
          ✕
        </button>
        <a
          href={BASE_LINK}
          onClick={() => setMenuOpen(false)}
          style={{
            display: "block",
            paddingBottom: "0.8em",
            paddingTop: "2em",
            color: "#b8b7ad",
          }}
        >
          Présentation
        </a>
        <a
          href={PROJECTS_LINK}
          onClick={() => setMenuOpen(false)}
          style={{ display: "block", paddingBottom: "0.8em", color: "#b8b7ad" }}
        >
          Projets
        </a>
      </div>
    </header>
  );
};

export default Header;
