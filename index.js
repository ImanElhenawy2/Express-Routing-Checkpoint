const express = require('express');
const cors = require('cors');
const app = express();
const ejs = require('ejs');
const homeRouter = require("./Routes/home.router")
const contactUsRouter = require("./Routes/contact-us.router")
const ourServiceRouter = require("./Routes/our-services.router")

//use cors
app.use(cors())

//use Routes
app.use("/Home", homeRouter)
app.use("/Contact-us", contactUsRouter)
app.use("/Our-Service", ourServiceRouter)

//use css file and static files
app.use(express.static(__dirname + '/puplic'))
// set view engine
app.set("view engine", "ejs")
app.set("views", "./views")

  const middleWare = (req, res, next) => {
  const today = new Date();

 const startHour = 9;
 const endHour = 17;
 const weekDay = today.getDay();

 if (
   today.getHours() >= startHour &&
   today.getHours() <= endHour &&
   weekDay != 1 &&
   weekDay != 6
 ) {
   next();
 } else {
   res.status(500).send({ message: "we're outside our working hours" });
 }
};

app.use(middleWare);

app.get("/Home", (req, res)=>{
    res.render("home", {title: "home"});
} );
app.get("/Our-Service", (req, res)=>{
    res.render("our-services", {title: "Our-Service"});
} );
app.get("/Contact-us", (req, res)=>{
    res.render("contact-us", {title: "Contact-us"});
} );
app.listen(8080, () => {
    console.log(" server is running....")
} )