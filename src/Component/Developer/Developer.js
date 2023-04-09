import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Carousel from './carousel';

export default function Developer() {
  const [home, setHome] = useState([]);
  const [car, setcar] = useState([]);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/developer`);
      setHome(response.data);
      console.log("dev", response.data.developer);
    };

    getSingleProductData();
  }, []);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/home`);
      setcar(response.data);
      console.log("home", response.data);
    };

    getSingleProductData();
  }, []);
  return (
    <div className="py-10 sm:py-12">
        <div className="container text-center">
          <h2 className="mb-5 font-manrope font-extrabolds capitalize leading-snug md:px-32 ">
            {home.developer}
            <br className="hidden sm:block" /> {home.crack}
          </h2>
          <div className="mb-10"></div>
        </div>
        <div className="mb-4">
        <Carousel />
        <div
                  style={{ marginTop: "20px" }}
                  className="hidden flex items-center gap-y-3 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:flex-row md:justify-center"
                >
                  <div>
                    <a href="#" className="">
                      <Button
                        className="explorerss"
                        style={{border: "2px solid #000 !important"}}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        <span style={{ marginRight: "10px" }}>
                        Get our Placement Stats
                        </span>{" "}
                        <ChevronRightOutlinedIcon />
                      </Button>
                    </a>
                  </div>

                  <div className="ml-2">
                    <div>
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
        </div>
      </div>
  )}
