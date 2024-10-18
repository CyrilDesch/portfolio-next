import Image, { StaticImageData } from "next/image";
import iconClick from "../../../assets/img/icons/icon-click.png";

const ProjectCard = ({
  title,
  image,
  redirection,
  typeProject,
}: {
  title: string;
  image: string | StaticImageData;
  redirection: string | null;
  typeProject: string;
}) => {
  return (
    <a
      className={"projectContainer"}
      href={redirection ?? "#"}
      rel={"noreferrer"}
      target={"_blank"}
    >
      <div>
        <p className={"title"}>{title.toUpperCase()}</p>
        <p className={"typeProject"}>
          {typeProject.toLowerCase().charAt(0).toUpperCase() +
            typeProject.toLowerCase().slice(1)}
        </p>
        {redirection && (
          <Image
            alt={"Icon cliquer"}
            className={"touchableIcon"}
            src={iconClick}
          />
        )}
      </div>
      <Image alt={"Project Image"} className={"backgroundImage"} src={image} />
    </a>
  );
};

export default ProjectCard;
