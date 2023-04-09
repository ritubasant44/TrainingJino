var express = require("express");
var app = express();
var fs = require("fs");
const cors = require("cors");

const http = require("http");

const productdata = require("./json/product.json");
const productcat = require("./json/category.json");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//Endpoint to get product list and descriptions

//get all products

app.get("/ecomm/products/", function (req, res) {
  fs.readFile("./json/product.json", "utf8", function (err, data) {
    res.end(data);
  });
});

app.get("/ecomm/cat/", function (req, res) {
  fs.readFile("./json/category.json", "utf8", function (err, data) {
    res.end(data);
  });
});

app.get("/ecomm/menu/", function (req, res) {
  fs.readFile("./json/Megamenu.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/ecomm/domain/", function (req, res) {
  fs.readFile("./json/common.json", "utf8", function (err, data) {
    res.end(data);
  });
});

// slider API
app.get("/training/slider/", function (req, res) {
  fs.readFile("./json/Slickslider1.json", "utf8", function (err, data) {
    res.end(data);
  });
});
// Footer API
app.get("/ecomm/footer/", function (req, res) {
  fs.readFile("./json/Footer.json", "utf8", function (err, data) {
    res.end(data);
  });
});

//API to get country of origin dropdown

app.get("/ecomm/admin/country_of_origin", function (req, res) {
  res.json([
    {counoforigin: "US"},
    {counoforigin: "UK"},
    {counoforigin: "Canada"},
    {counoforigin: "Australia"},
    {counoforigin: "Newzealand"}
  ]);
});

//API to get Category dropdown

app.get("/ecomm/admin/categoriesselection", function (req, res) {
  res.json([
    {category: "Fashion"},
    {category: "Electronics"},
    {category: "Home and Decor"},
    {category: "Food and Grains"},
    {category: "Electricals"}
  ]);
});
//Get images

/* var base64str = base64_encode('./products/images/Product101_Image_1.jpg');
console.log(base64str);
  
function base64_encode(file) {
    return "data:image/jpg;base64,"+fs.readFileSync(file, 'base64');
}
 */

//API for searchbar and product details
app.get("/ecomm/products/:id", (req, resp) => {
  const { id } = req.params;
  const fouduser = productdata.find((user) => user.id === id);
  resp.send(fouduser);
});

// Bottom header Items

app.get("/training/menus/", function (req, res) {
  fs.readFile("./json/menus.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/commoncontent/", function (req, res) {
  fs.readFile("./json/commoncontent.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/home/", function (req, res) {
  fs.readFile("./json/home.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/topmain/", function (req, res) {
  fs.readFile("./json/topmain.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/developer/", function (req, res) {
  fs.readFile("./json/developer.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/Slickslider2/", function (req, res) {
  fs.readFile("./json/Slickslider2.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/Slickslider3/", function (req, res) {
  fs.readFile("./json/Slickslider3.json", "utf8", function (err, data) {
    res.end(data);
  });
});
app.get("/training/Slickslider4/", function (req, res) {
  fs.readFile("./json/Slickslider4.json", "utf8", function (err, data) {
    res.end(data);
  });
});


//server Creation to listen at port 9000
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Rest Api for Product description", host, port);
});
