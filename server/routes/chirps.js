const express = require("express");
const chirpStore = require("../chirpsstore");

let router = express.Router();

//GET - read resource - retrieve the chirp
router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

//POST - create resource - create the chirp
router.post("/", (req, res) => {
  chirpStore.CreateChirp(req.body);
  res.sendStatus(200); //sendStatus 200
});

//PUT - update resource - update the chirp
router.put("/:id?", (req, res) => {
  let id = req.params.id;
  chirpStore.UpdateChirp(id, req.body);
  res.sendStatus(200); //sendStatus 200
});

//DELETE - delete resource - delete the chirp by it's id
router.delete("/:id?", (req, res) => {
  chirpStore.DeleteChirp(req.params.id);
  res.sendStatus(200); //sendStatus 200
});

module.exports = router;
