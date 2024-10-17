import { useTranslation } from "next-i18next";
import Image from "next/image";
import appIcon from "../../../assets/img/icons/icon-app.svg";

const Footer = (): JSX.Element => {
  const { t } = useTranslation(["website"]);

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
        onClick={() => window.open("TODO REMONTER")}
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
