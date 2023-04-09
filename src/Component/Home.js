import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomeMain from "../Component/HomeMain/HomeMain";
// import Footer from "../../organism/Footer/Footer";
/* import Product from "../../template/Product/Product";
import ProductList from "../../molecule/ProductSections/ProductList";
import ProductUpload from '../ProductUpload'; */

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <div className="">
          <Header />
         <Routes>
            <Route exact path="/" element={<HomeMain />} />
          </Routes>
         
          {/* <Footer /> */}
           </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default Home;
