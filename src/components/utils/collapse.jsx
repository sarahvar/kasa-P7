import React,{useState} from 'react';




const Collapsible = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
    return (
        <div>
          <button className='button' onClick={toggle}>{props.label}</button>
          {open && (
            <p className="text">
            {props.content}
            </p>
          )}
        </div>
  )};
export default Collapsible;