import React, { useState, useEffect } from "react";
import axios from "axios";
import './immersive.css';
// import Slider from "react-slick";
// import a from "../../atoms/a";
import Card from "./Card.js";
import "slick-carousel/slick/slick.css";

export default function Cardcontainer(props) {
    const [home, setHome] = useState([]);
    useEffect(() => {
      const getSingleProductData = async () => {
        const response = await axios.get(
          `http://localhost:9000/training/developer`
        );
        setHome(response.data);
        console.log("dev", response.data);
      };
  
      getSingleProductData();
    }, []);

  return (
    <div className="mb-16 flex conmargin flex-wrap justify-center gap-x-6 gap-y-16  sm:mb-6 md:flex-nowrap">
      <div className="card immersive_sectionw bg-v5-green-100 h-full flex-col p-2 pt-4">
        <img src={home.url} className="immersive_image"/>
      </div>
      <div className="card immersive_sectionw bg-v5-green-100 h-full flex-col p-2 pt-4">
        <img src={home.url1} className="immersive_image"/>
      </div>
    </div>
  );
}
