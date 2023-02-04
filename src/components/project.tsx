import React from "react";
import Link from "next/link";
interface Props {
  icons: string[];
  classes: string;
  classElement: string;
  title: string;
  date: string;
  content: string;
  linkSite: string;
  classLinkGit: string;
  linkgit?: string;
  image: string;
}

export default function Project(props: Props) {
  let iconsList = props.icons.map((icon: string) => (
    <img
      key={icon.toString()}
      className="icon"
      src={"../images/icons/" + icon}
      alt={icon.split(".")[0]}
    />
  ));

  return (
    <div id="project" className={props.classes}>
      <div className={props.classElement}>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p className="my-6">{props.content}</p>
        <div className="flex">
          <Link target="_blank" className="flex pr-1" href={props.linkSite}>
            <h4 className="mb-4">View website</h4>
            <i className="fas fa-external-link-alt ml-2"></i>
          </Link>
          {props.linkgit && (
            <Link className={props.classLinkGit} href={props.linkgit}>
              <h4 className="mb-4"> / View source code</h4>
              <i className="far fa-file-code text-xl ml-2"></i>
            </Link>
          )}
        </div>
        <div className="icons flex flex-wrap">{iconsList}</div>
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="image-side w-1/3"
        href={props.linkSite}
      >
        <img
          src={"../images/" + props.image}
          alt="screenshot of Coriander Planner website"
          className="mx-3 my-5 md:mx-0 md:my-0"
        />
      </Link>
    </div>
  );
}
