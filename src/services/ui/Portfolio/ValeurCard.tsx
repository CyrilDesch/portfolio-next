import Image from "next/image";
import iconCommunication from "../../../assets/img/icons/icon-communication.svg";
import iconDecouverte from "../../../assets/img/icons/icon-decouverte.svg";
import iconPassion from "../../../assets/img/icons/icon-passion.svg";
import iconSuccess from "../../../assets/img/icons/icon-success.svg";

const ValeurCard = ({
  title,
  paragraphe,
  presetIcon,
}: {
  title: string;
  paragraphe: string;
  presetIcon: string;
}) => {
  return (
    <div className={"valeurCard"}>
      {presetIcon === "succes" ? (
        <Image alt={"icon-success"} className={"icon"} src={iconSuccess} />
      ) : (
        false
      )}
      {presetIcon === "passion" ? (
        <Image alt={"icon-passion"} className={"icon"} src={iconPassion} />
      ) : (
        false
      )}
      {presetIcon === "decouverte" ? (
        <Image
          alt={"icon-decouverte"}
          className={"icon"}
          src={iconDecouverte}
        />
      ) : (
        false
      )}
      {presetIcon === "communication" ? (
        <Image
          alt={"icon-communication"}
          className={"icon"}
          src={iconCommunication}
        />
      ) : (
        false
      )}
      <h1>{title}</h1>
      <p>{paragraphe}</p>
    </div>
  );
};

export default ValeurCard;
