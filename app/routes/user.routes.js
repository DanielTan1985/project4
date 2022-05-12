// const express = require("express");
// const router = express.Router();
// const LocationController = require("../controllers/LocationController");
// const { authJwt } = require("../middleware");
// const controller = require("../controllers/user.controller");

// const { Cuisine, Price } = require("../models");

// const locationController = new LocationController();

// router.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// router.get("/api/test/all", controller.allAccess);

// router.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

// router.get(
//   "/api/test/mod",
//   [authJwt.verifyToken, authJwt.isModerator],
//   controller.moderatorBoard
// );

// router.get(
//   "/api/test/admin",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   controller.adminBoard
// );

// router.get("/user", (req, res) => {
//   return res.send("You have called a user route");
// });

// router.get("/user/cuisine", async (req, res) => {
//   const results = await Cuisine.findAll();

//   return res.send(JSON.stringify(results));
// });

// router.get("/user/price", async (req, res) => {
//   const results = await Price.findAll();
//   return res.send(JSON.stringify(results));
// });

// // Invoke onboard() in LocationController based on the route
// router.post("/user/onboard", locationController.onboard);
// //router.post("/user/offboard", locationController.offboard);

// router.post("/user/location", locationController.create);

// router.put("/user/location", locationController.update);

// router.delete("/user/cuisine/:cuisineId", locationController.delete);
// router.delete("/user/price/:priceId", locationController.delete);

// module.exports = router;

const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

//Farhan 120522 2015Hrs
const { Cuisine, Price } = require("../models");
// const Cuisine = require("../models/cuisine.model");
// const Price = require("../models/price.model")


const locationController = new LocationController();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/all", controller.allAccess);

router.get("/user", [authJwt.verifyToken], controller.userBoard);

router.get(
  "/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  controller.moderatorBoard
);

router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

router.get("/users/user", (req, res) => {
  return res.send("You have called a user route");
});
//
const cuisine1 = () => {
  return models.results.findAll({
    attributes: ['id','type_of_food']
  });
};


router.get(`/users/cuisine`, async (req, res) => {
  try {
      const results = await queries.cuisine1();
      res.status(200).json(results);
  } catch (error) {
      res.status(500).send(error)
  }
});

//

//TESTING !!!
// router.get("/users/cuisine", async (req, res) => {
//   const results = await Cuisine.findAll();

//   return res.send(JSON.stringify(results));
// });

router.get("/users/price", async (req, res) => {
  const results = await Price.findAll();
  return res.send(JSON.stringify(results));
});

// Invoke onboard() in LocationController based on the route
router.post("/users/onboard", locationController.onboard);
//router.post("/user/offboard", locationController.offboard);

router.post("/users/location", locationController.create);

router.put("/users/location", locationController.update);

router.delete("/users/cuisine/:cuisineId", locationController.delete);
router.delete("/users/price/:priceId", locationController.delete);

module.exports = router;
