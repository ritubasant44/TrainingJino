import React, { useEffect, useState } from "react";
import "./Modern.css";
import axios from "axios";
import Slider from './Slider.js';
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Button } from "@material-ui/core";

export default function Modern() {
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
      <div class="container text-center">
        <h2 class="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
          {home.modern}
          <br class="hidden sm:block" /> {home.experience}
          <br class="hidden sm:block" /> {home.learning}
        </h2>
        <p class="mb-10 leading-loose sm:px-44 text-v5-neutral-400  font-light">
        {home.modernGrow}
          <br class="hidden md:block" /> {home.receive}
          <strong class="font-bold text-black"> {home.build}</strong>
          <br class="hidden md:block" /> { home.professional}
        </p>
        <div class="mb-10"></div>
      </div>
      <div className="mb-4 prenext">
        <Slider />
        </div>
        <div className="ml-2">
                    <div style={{textAlign: "center"}}>
                      <Button
                        className="explores"
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        <span style={{ marginRight: "10px" }}>
                         Book Your Free Trial, Now
                        </span>{" "}
                        <ChevronRightOutlinedIcon />
                      </Button>
                    </div>
                  </div>
    </div>
  );
}
