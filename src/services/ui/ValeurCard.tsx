import Image, { StaticImageData } from "next/image";

const ValeurCard = ({
  title,
  paragraphe,
  icon,
}: {
  title: string;
  paragraphe: string;
  icon: string | StaticImageData;
}) => {
  return (
    <div className={"valeurCard"}>
      <Image alt={"icon"} className={"icon"} src={icon} />
      <h3>{title}</h3>
      <p>{paragraphe}</p>
    </div>
  );
};

export default ValeurCard;
