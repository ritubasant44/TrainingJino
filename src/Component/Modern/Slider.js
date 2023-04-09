import React, { useState, useEffect } from "react";
import axios from "axios";
import './Modern.css';
import Slider from "react-slick";
// import a from "../../atoms/a";
import Card from "./Card.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Promoseccard(props) {
  let settings = {
    infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
  nextArrow: <button type="button" className="slick-next">Next</button>,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [result, setResult] = useState([]);
  const [slide2, setslide2] = useState([]);

  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/Slickslider3`);
      setResult(response.data);
      console.log('slider', response.data);
    };

    getSingleProductData();
  }, []);
  useEffect(() => {
    const getSingleProductData = async () => {
      const response = await axios.get(`http://localhost:9000/training/Slickslider2`);
      setslide2(response.data);
      console.log('slider', response.data);
    };

    getSingleProductData();
  }, []);

  return (
    <div
      className="container my-5 homepage promoc"
    >
      <div className="slick-slider slick-initialized">
        <Slider {...settings} className={props.slickclass}>
          {result.map((record, index) => {
            return (
              <Card
              key={index}
                slickclass="slickstyle"
                imgPath={record.imgPath.url}
                imagedesc={record.imagedesc}
                desc={record.desc}
                price={record.price}
                disprice={record.disprice}
                p={record.p}
                t1={record.t1}
                t2={record.t2}
                t3={record.t3}
                t4={record.t4}
                b1={record.b1}
                b2={record.b2}
                b3={record.b3}
                b4={record.b4}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
