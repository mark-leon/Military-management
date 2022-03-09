let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Military Model

let militarySchema = require("../Models/Military");
  
// CREATE Military
router.post("/create-military", (req, res, next) => {
  militarySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ Militaries
router.get("/", (req, res) => {
  militarySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE military
router
  .route("/update-military/:id")
  // Get Single military
  .get((req, res) => {
    militarySchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update military Data
  .put((req, res, next) => {
    militarySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("military updated successfully !");
        }
      }
    );
  });
  
// Delete military
router.delete("/delete-military/:id", 
(req, res, next) => {
  militarySchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;