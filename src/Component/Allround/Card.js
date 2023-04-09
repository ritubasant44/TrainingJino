import React from "react";
import "./Allround.css";

const Card = (props) => {
  return (
    <div className="card round_sectionw bg-v5-neutral-200 h-full flex-col overflow-hidden p-2 pt-4">
      <img className="card-img-top" src={props.imgPath} alt={props.imagedesc} />
      <div class="cards">
        <h3 class="font-manrope text-lg font-black">
          {props.t1}
          <br />
           {props.t2}
        </h3>
        <p class="text-v5-neutral-400 leading-relaxed ">
          {props.t3}
          <br />
          {props.t4}
        </p>
      </div>
      {/*  <div className="card-body" style={{textAlign: "center"}}>
      <h6 className="card-title text-center  font-manrope font-extrabold text-black ">{props.desc}</h6>
      <p className="card-text"> {props.price}</p>
      <img className="card-img-top imgl" src={props.imgPathl} alt={props.imagedesc}/>
    </div> */}
    </div>
  );
};
export default Card;
