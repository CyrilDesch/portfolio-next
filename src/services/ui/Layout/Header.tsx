/* eslint-disable react/jsx-curly-brace-presence */
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { slide as Menu } from "react-burger-menu";
import appIcon from "../../../assets/img/icons/icon-app.svg";
import burgerMenuIcon from "../../../assets/img/icons/icon-burger.svg";
import arrowUpIcon from "../../../assets/img/icons/icon-arrow-up.svg";
import { SocialIcon } from "react-social-icons";
import useTxtRotate from "../../utils/useTxtRotate";
import { BASE_LINK, PROJECTS_LINK } from "../../../routes";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../../routes/external";
import useScroll from "../../utils/useScroll";

import iconFrenchFlag from "../../../assets/img/icons/icon-french.svg";
import iconEnglishFlag from "../../../assets/img/icons/icon-english.svg";
import { ReactElement } from "react";

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation("website");
  const router = useRouter();

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
              <Menu
                customBurgerIcon={
                  <Image alt={"icon-menu"} src={burgerMenuIcon} />
                }
                styles={burgerMenuStyle}
                right
              >
                <a className={"menu-item"} href={BASE_LINK}>
                  Présentation
                </a>
                <a className={"menu-item"} href={PROJECTS_LINK}>
                  Projets
                </a>
              </Menu>
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
            className="bg-white p-4 rounded-full w-[50px] h-[50px] cursor-pointer"
            onClick={switchLanguage}
          >
            {i18n.language === "fr" ? (
              <Image
                alt={"icon-english"}
                className={"w-full"}
                src={iconEnglishFlag}
              />
            ) : (
              <Image
                alt={"icon-french"}
                className={"w-full"}
                src={iconFrenchFlag}
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
    </header>
  );
};

const burgerMenuStyle = {
  bmBurgerButton: {
    width: "40px",
    height: "40px",
    position: "relative",
  },
  bmCrossButton: {
    left: "20px",
    top: "20px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100vh",
    top: "0",
  },
  bmMenu: {
    background: "#3e3444",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#e5dde3",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    paddingBottom: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
  },
};

export default Header;
