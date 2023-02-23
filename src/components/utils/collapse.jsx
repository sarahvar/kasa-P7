import React, { useState } from "react";

//Permet de créer le component collapse utilisable pour la page about et Logement
const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div>
      <button className="button" onClick={toggle}>
        {props.label}
        {!open ? (
          <span>
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        ) : (
          <span>
            <i class="fa-solid fa-chevron-up"></i>
          </span>
        )}
      </button>
      {open && <p className="text">{props.content}</p>}
    </div>
  );
};
export default Collapsible;
