import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import iconClick from "../../assets/img/icons/icon-click.png";

const LinkIfRedirection = ({
  redirection,
  children,
}: {
  redirection: string | null;
  children: React.ReactNode;
}) => {
  return redirection !== null ? (
    <a
      className={twMerge(
        "projectContainer",
        redirection ? "cursor-pointer" : "cursor-not-allowed",
      )}
      href={redirection}
      rel={"noreferrer"}
      target={"_blank"}
    >
      {children}
    </a>
  ) : (
    <div className={twMerge("projectContainer", "cursor-not-allowed")}>
      {children}
    </div>
  );
};

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
    <LinkIfRedirection redirection={redirection}>
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
    </LinkIfRedirection>
  );
};

export default ProjectCard;
