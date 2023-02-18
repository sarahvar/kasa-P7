import React, { useState } from "react";
import arrowleft  from "../../assets/images/arrow-left.svg"
import arrowright from "../../assets/images/arrow-right.svg"
const Carousel = ({carousels}) => {
	const [current, setCurrent] = useState(0)
	const length = carousels.length;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	  };
	
	  const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	  };
	  return (
		<div className="slider">
		  {carousels.map((picture, index) => {
			return (
			  <div
				key={index}
				className={
				  index === current
					? "slide slider__active-picture"
					: "slide slider__inactive-picture"
				}
			  >
				{index === current && (
				  <img src={picture} alt="" className="slider__picture" />
				)}
			  </div>
			);
		  })}
		  {length > 1 ? (
			<>
			  <div className="slider__previous" onClick={prevSlide}>
				<img src={arrowleft} alt="" className="slider__previous-icon" />
			  </div>
			  <div className="slider__next" onClick={nextSlide}>
				<img src={arrowright} alt="" className="slider__next-icon" />
			  </div>
			</>
		  ) : null}
		</div>
	  );
	};
	


export default Carousel