import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Competence = ({
  className,
  icon,
  title,
  desc,
}: {
  className?: string;
  icon: string | StaticImport;
  title: string;
  desc: string[];
}) => {
  return (
    <div className={twMerge("competenceContainer", className)}>
      <Image alt={"icon"} className={"icon"} src={icon} />
      <h3>{title}</h3>
      <ul>
        {desc.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Competence;
