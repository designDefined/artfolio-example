"use client";

import { useState } from "react";
import "./Card.css";

export default function ModalCard({title, src, children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="Card" onClick={()=>setIsOpen(true)}>
        <img className="CardImage" src={src}/>
        <div className="CardTitle">{title}</div>    
      </div>
      {
        isOpen && (
          <div className="ModalContainer" onClick={()=>setIsOpen(false)}>
            <div className="Modal" onClick={(e)=>e.stopPropagation()}>
              {children}
            </div>
          </div>
        )
      }
    </>
  )
}