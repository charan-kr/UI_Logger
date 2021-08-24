const express = require("express");
const LogSchema = require("../model/LogSchema");

const router = express.Router();

//path            /api/product
//description     GET request
//access          PUBLIC
router.get("/", (req, res) => {
  LogSchema.find()
    .then((logs) => {
      if (!logs) return res.json({ msg: "no logs" });

      res.json(logs);
    })
    .catch((error) => res.json({ msg: "failed to load", error }));
});

//path            /api/product/:_id
//description     GET request
//access          PUBLIC
router.get("/:id", (req, res) => {
  LogSchema.findById(req.params.id)
    .then((log) => {
      if (!log) return res.json({ msg: "no log" });

      res.json(log);
    })
    .catch((error) => res.json({ msg: "failed to load", error }));
});
//path            /api/product/
//description     POST request
//access          PUBLIC
router.post("/", (req, res) => {
  const newProduct = new LogSchema({ log: req.body });
  newProduct
    .save()
    .then((log) => res.json({ msg: "Added new Log", log }))
    .catch((error) =>
      res.status(400).json({ msg: "Failed to add Log", error })
    );
});

//path                  /api/product/:id
//description           DELETE request
//access                PUBLIC
router.delete("/:id", (req, res) => {
  LogSchema.deleteOne({ _id: req.params.id })
    .then(() => res.json({ msg: "deleted log" }))
    .catch((error) =>
      res.status(400).json({ msg: "error deleting log", error })
    );
});

module.exports = router;
