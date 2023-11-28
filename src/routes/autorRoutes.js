import express from "express"
import AutorController from "../controllers/autorController.js"

const autores = express.Router()
autores.post("/autores", AutorController.cadastrarAutor)
autores.get("/autores", AutorController.listarAutores)
autores.get("/autores/:id", AutorController.listarAutorPorID)
autores.put("/autores/:id", AutorController.atualizarAutor)
autores.delete("/autores/:id", AutorController.deletarAutor)

export default autores