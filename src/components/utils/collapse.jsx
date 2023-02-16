import React, { useState } from "react";

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
