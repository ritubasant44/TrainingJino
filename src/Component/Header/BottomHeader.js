import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

export default function BottomHeader() {
  const [megaTitle, setmegaTitle] = useState([]);
  const [common, setCommon] = useState([]);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/menus`);
      setmegaTitle(response.data);
      console.log("megatitle", response.data);
    };

    getSingleProductData();
  }, []);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(
        `http://localhost:9000/training/commoncontent`
      );
      setCommon(response.data);
      console.log("megatitle", response.data);
    };

    getSingleProductData();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src="images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {megaTitle.map((menu, indexes) => {
              return (
                <li className="nav-item dropdown" key={indexes}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {menu.title}
                    {menu.content ? <ExpandMoreOutlinedIcon /> : ""}
                  </a>

                  {menu.content ? (
                    <ul
                      style={{ width: "450px", top: "-54px" }}
                      className="dropdown-menu dropdowneffect"
                      aria-labelledby="navbarDropdown"
                    >
                      <div
                        className="flex flex-col gap-2"
                        style={{ display: "flex" }}
                      >
                        {menu.content.map((c, i) => (
                          <li
                            key={i}
                            style={{ display: "flex" }}
                            className="mb-2 justify-between transition-all hover:opacity-70 gap-2 rounded-lg bg-v5-neutral-200 last:mb-0"
                          >
                            <div>
                              <a
                                className="mb-2 flexb justify-between gap-2 rounded-lg bg-v5-neutral-200 pl-1 last:mb-0 transition-all hover:opacity-70"
                                href="#"
                              >
                                <div className="widthb">
                                  {" "}
                                  <img
                                    className="logob"
                                    src="images/logo.png"
                                  />
                                </div>
                                <div className="flex-1 ml-2 mousehover">
                                  <h5 className="text-sm">{c.title}</h5>
                                  {c.description.map((v, index) => (
                                    <p
                                      className="text-sm text-v5-neutral-400"
                                      key={index}
                                    >
                                      {v.type}
                                    </p>
                                  ))}
                                </div>
                              </a>
                            </div>
                          </li>
                        ))}
                      </div>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
          {common.map((menu, r) => (
            <div style={{ marginRight: "26px" }}>
              <button
                key={r}
                style={{ marginLeft: "10px", textTransform: "initial" }}
                className="whitespace-nowrap rounded-[10px] border-2 border-black px-4 py-2 font-manrope text-base font-bold text-black transition-all hover:border-v5-green-400 hover:bg-v5-green-400 hover:text-v5-green-100 h-[38px] css-ysfxp3"
              >
                {menu.content}
                <ChevronRightOutlinedIcon />
              </button>

              <button
                style={{
                  marginLeft: "10px",
                  textTransform: "initial",
                  backgroundColor: "#f5ee15c4",
                }}
                className="trial whitespace-nowrap rounded-[10px] border-2 border-black px-4 py-2 font-manrope text-base font-bold text-black transition-all hover:border-v5-green-400 hover:bg-v5-green-400 hover:text-v5-green-100 h-[38px] css-ysfxp3"
              >
                {menu.trial}
                <ChevronRightOutlinedIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
