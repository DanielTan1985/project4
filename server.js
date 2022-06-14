const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); 
app.use(express.json()); // Enable express to parse JSON as request body.



var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus:200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// database
const db = require("./app/models");



const Role = db.role;

//MYSQL3
// db.sequelize.sync();
// force: true will drop the table if it already exists
// 
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to group 1 project @ heroku server" });
});

// routes

const authRouter = require('./app/routes/auth.routes');
//



//
app.use("/api/auth", authRouter);

//Test router
const userRouter = require("./app/routes/user.routes");
app.use("/api/user", userRouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

