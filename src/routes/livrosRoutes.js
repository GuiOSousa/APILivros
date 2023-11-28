import express from "express"
import LivroController from "../controllers/livroController.js"

const livros = express.Router()
livros.post("/livros", LivroController.cadastrarLivro)
livros.get("/livros/busca", LivroController.listarLivrosPorEditora)
livros.get("/livros", LivroController.listarLivros)
livros.get("/livros/:id", LivroController.listarLivroPorID)
livros.put("/livros/:id", LivroController.atualizarLivro)
livros.delete("/livros/:id", LivroController.deletarLivro)

export default livros