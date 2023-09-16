import Link from "next/link";
import "./Card.css";

export default function Card({title, src, href}) {

  return (
      <Link className="Card" href={href}>
        <img className="CardImage" src={src}/>
        <div className="CardTitle">{title}</div>
      </Link>
  )
}