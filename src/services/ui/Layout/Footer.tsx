import { useTranslation } from "next-i18next";
import Image from "next/image";
import { ReactElement } from "react";
import appIcon from "../../../assets/img/icons/icon-app.svg";
import useScroll from "../../utils/useScroll";

const Footer = (): ReactElement => {
  const { t } = useTranslation(["website"]);

  const { scrollTo } = useScroll();

  return (
    <footer>
      <p>
        <span className={"barTitle"}>EMAIL : </span>
        contact@cyrildeschamps.fr
      </p>
      <Image
        alt={"icon-app"}
        className={"icon"}
        loading={"eager"}
        onClick={() => scrollTo(0)}
        src={appIcon}
      />
      <p>
        <span className={"barTitle"}>{t("website:footer.phone")} : </span>
        +33 6 42 90 88 40
      </p>
    </footer>
  );
};

export default Footer;
