import React from "react";
import Link from "next/link";
interface Props {
  link: string;
  textContent: string;
}
export default function Button(props: Props) {
  return (
    <Link id="button" href={props.link} rel="noopener noreferrer">
      <span>{props.textContent}</span>
    </Link>
  );
}
