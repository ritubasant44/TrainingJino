import React from "react";

const Slickslider = (props) => {
  return (
    <div className="card cardstyle bg-v5-neutral-200 flex h-full flex-col items-center justify-center overflow-hidden p-2 pt-4">
    <img className="card-img-top" src={props.imgPath} alt={props.imagedesc}/>
    <div className="card-body" style={{textAlign: "center"}}>
      <h6 className="card-title text-center  font-manrope font-extrabold text-black ">{props.desc}</h6>
      <p className="card-text"> {props.price}</p>
      <img className="card-img-top imgl" src={props.imgPathl} alt={props.imagedesc}/>
    </div>
    </div>
  );
};
export default Slickslider;
