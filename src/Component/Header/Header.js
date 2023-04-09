import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
// import { faXmark } from '@fortawesome/pro-solid-svg-icons';

export default function Header() {
  return (
 
    <div className="fixed z-50 w-screen">
         <TopHeader />
    <BottomHeader />
    </div>
  );
}
