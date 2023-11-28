import autor from "../models/Autor.js"

export default class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição.`})
        }
    }

    static async listarAutorPorID(req, res) {
        try {
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na requisição do autor.`})
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({message: "Criado com sucesso.", autor: novoAutor})
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar autor.`})
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Atualizado com sucesso.", autor: autor})
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha na atualização do autor.`})
        }
    }

    static async deletarAutor(req, res){
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({message: "Deletado com sucesso.", autor: autor})
        } catch(error) {
            res.status(500).json({message: `${error.message} - falha ao deletar o autor.`})
        }
    }

}