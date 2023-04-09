import React from "react";
import "./Header.css";
// import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function TopHeader() {
  return (
    <div className="topheader h-[44px] flex w-full text-center items-center bg-v5-green-100 px-6 text-sm sm:text-base md:h-[40px]">
        <span className="font-rubik">Find out where Crio grads get placed. </span>
        <div className="linkstyle"><a href='#' className="font-rubik font-bold underline">
        Get our Placement Stats
        <ChevronRightOutlinedIcon />
        </a>   
        </div>  
    </div>
  );
}
