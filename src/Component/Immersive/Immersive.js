import React, { useEffect, useState } from "react";
import "./immersive.css";
import axios from "axios";
import Cardcontainer from './cardcontainer';
// import Slider from './Cardcontainer.js';
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import { Button } from "@material-ui/core";

export default function Immersive() {
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
    <div className="py-10 sm:py-12">
      <div class="container immersive-center">
        <h2 class="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
        {home.Immersive}
        </h2>
        <p class="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
        {home.immersivedesc}
        </p>
        <div class="mb-10"></div>
      </div>
      <div>
        <Cardcontainer />
      </div>
    </div>
  );
}
