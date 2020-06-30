const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const estudiantes = require("./sample.json");
const { json } = require("body-parser");

router.get("/", (req, res) => {
  res.json(estudiantes);
});

router.post("/", (req, res) => {
  const { Nombre, Apellido, Cedula } = req.body;
  if (Nombre && Apellido && Cedula) {
    const id = estudiantes.length + 1;
    const newEstudiante = { ...req.body, id };
    estudiantes.push(newEstudiante);
    res.json(estudiantes);
  } else {
    res.status(500).json({error: "There was an error."});
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre, Apellido, Cedula } = req.body;
  if (Nombre && Apellido && Cedula) {
    _.each(estudiantes, (estudiante, i) => {
      if (estudiante.id == id) {
        estudiante.Nombre = Nombre;
        estudiante.Apellido = Apellido;
        estudiante.Cedula = Cedula;
      }
    });
    res.json(estudiantes);
  } else{
      res.status(500).json({error: "There was an error."});
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(estudiantes, (estudiante, i) => {
    if (estudiante.id == id) {
      estudiantes.splice(i, 1);
    }
  });
  res.send(estudiantes);
});

module.exports = router;
