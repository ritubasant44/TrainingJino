import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import axios from "axios";
import { Button } from "@material-ui/core";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Developer from '../Developer/Developer';
import Modern from '../Modern/Modern';
import Allround from '../Allround/Allround';
import Immersive from '../Immersive/Immersive';
import Fellowship from '../Fellowship/fellowship';

export default function TopHeader() {
  const [home, setHome] = useState([]);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/home`);
      setHome(response.data);
      console.log("home", response.data);
    };

    getSingleProductData();
  }, []);
  return (
    <div
      className="container-fluid pt-[120px] sm:pt-[120px]"
      style={{ marginBottom: "20px" }}
    >
      {home.map((menu, indexes) => {
        return (
          <div key={indexes}
            className="container hidden w-full items-center justify-between lg:flex"
            style={{ marginTop: "30px" }}
          >
            <div className="flex max-w-[600px] flex-col space-y-6">
              <h1 className="font-manrope text-[32px] font-black capitalize leading-tight sm:text-[44px]">
                {menu.learn1} <br />
                {menu.learn2}
                <br />   {menu.learn3}
              </h1>

              <div className=" text-v5-neutral-400">
                <h2 className="mb-6 font-manrope text-xl font-normal">
                  {menu.work}
                </h2>
                <div className="flex marginb flex-col space-y-2 font-rubik font-normal sm:space-y-0 md:text-sm">
                  <p>
                    <strong>{menu.build}</strong> {menu.professional}
                    {menu.developer}
                  </p>
                  <p>
                    <strong>{menu.master}</strong> {menu.latest}
                  </p>
                  <p>
                    <strong>{menu.crack}</strong> {menu.dev}
                  </p>
                </div>
                <div className="group z-[1] flex w-max  cursor-pointer items-center  rounded-full md:relative">
                  <div className="md:mr-2" style={{ display: "flex" }}>
                    <div className="mr-2 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-v5-green-400 transition-all group-hover:bg-v5-green-100">
                      <i
                        className="fa fa-play-circle colorgreen"
                        style={{ fontSize: "40px" }}
                      ></i>
                    </div>
                    <div className="upskill colorgreen font-rubik text-lg bold900 text-v5-green-400 group-hover:underline">
                     {menu.upskill}
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="hidden flex items-center gap-y-3 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:flex-row md:justify-center"
                >
                  <div>
                    <a href="#" className="">
                      <Button
                        className="explore"
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        <span style={{ marginRight: "10px" }}>
                        {menu.explore}
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
                          {menu.ftrial}
                        </span>{" "}
                        <ChevronRightOutlinedIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-1 achievement sm:p-0 bg-v5-neutral-200 text-v5-neutral-400 flex flex-wrap  justify-center  rounded-[20px] sm:flex-nowrap sm:justify-between md:flex md:min-w-[680px]">
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                    <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft} <br /> {menu.fnp}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn1}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft1} <br /> {menu.fnp1}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn2}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft2} <br /> {menu.fnp2}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn3}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft3} <br /> {menu.fnp3}
                    </p>
                  </div>
                  <div className="my-2 flex flex-col justify-center px-2 text-center md:w-1/5">
                  <h4 className="text-black font-manrope font-extrabold">
                    {menu.fn4}
                    </h4>
                    <p className="whitespace-nowrap font-rubik text-xs leading-tight">
                    {menu.ft4} <br /> {menu.fnp4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={menu.topbimage.url} height="450px" width="360px" />
            </div>
          </div>
        );
      })}

      {/* Developer Section */}
      <Developer />
       {/* Modern Section */}
      <Modern />
      <Allround />
      <Immersive />
      <Fellowship />
    </div>
  );
}
