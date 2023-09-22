import "./PropertyDescription.css";
export default function PropertyDescription ({name, children}) {


  return (
    <div className="PropertyDescription">
      <code className="PropertyDescriptionName">{name}</code>: {children}
    </div>
  )
  
}