import livro from "../models/Livro.js"
import autor from "../models/Autor.js"

export default class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição.`})
        }
    }

    static async listarLivroPorID(req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição do livro.`})
        }
    }

    static async cadastrarLivro (req, res) {
        const livroJson = req.body
        try {
            const autorEncontrado = await autor.findById(livroJson.autor)
            const objLivro = {...livroJson, autor: {...autorEncontrado._doc}}
            const novoLivro = await livro.create(objLivro)
            res.status(201).json({message: "Criado com sucesso.", livro: novoLivro})
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar livro.`})
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Atualizado com sucesso.", livro: livro})
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na atualização do livro.`})
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: "Deletado com sucesso.", livro: livro})
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha ao deletar o livro.`})
        }
    }

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora
        
        try{
            const livros = await livro.find({editora: editora})
            res.status(200).json(livros)
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na pesquisa.`})
        }

    }

}