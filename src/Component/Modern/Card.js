import React from "react";
import "./Modern.css";

const Card = (props) => {
  return (
    <div className="card modern_section bg-v5-neutral-200 h-full flex-col items-center justify-center overflow-hidden p-2 pt-4">
      <span class="rounded-full top-span bg-v5-green-200 px-2 py-1 font-rubik text-xs font-bold text-white">
         {props.p}
      </span>
      <img className="card-img-top" src={props.imgPath} alt={props.imagedesc} />
      <div class="text-center">
        <h3 class="font-manrope text-lg font-black">
          {props.t1}
          <br />
           {props.t2}
        </h3>
        <p class="font-rubik  text-sm text-v5-neutral-400">
          {props.t3}
          <br />
          {props.t4}
        </p>
      </div>
      <div class="flex modernb flex-wrap justify-center gap-x-2 gap-y-2">
        <div class="min-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 border-black py-1 px-3 text-center font-rubik text-xs  ">
           {props.b1}
        </div>
        <div class="min-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 border-black py-1 px-3 text-center font-rubik text-xs  ">
           {props.b2}
        </div>
        <div class="min-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 border-black py-1 px-3 text-center font-rubik text-xs  ">
           {props.b3}
        </div>
        <div class="min-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-2 border-black py-1 px-3 text-center font-rubik text-xs  ">
           {props.b4}
        </div>
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
