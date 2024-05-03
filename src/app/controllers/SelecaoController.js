import conexao from "../database/conexao.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {

    async index(req, res) {
        const resultado = await SelecaoRepository.findAll()
        res.json(resultado)
    }

    async show(req, res) {
        const id = req.params.id
        const resultado = await SelecaoRepository.findById(id)
        res.json(resultado)
    }

    async store(req, res) {
        const selecao = req.body
        const resultado = await SelecaoRepository.create(selecao)
        res.json(resultado)
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const resultado = await SelecaoRepository.update(selecao, id)
        res.json(resultado)
    }

    async delete(req, res) {
        const id = req.params.id
        const resultado = await SelecaoRepository.delete(id)
        res.json(resultado)
    }

}

export default new SelecaoController()