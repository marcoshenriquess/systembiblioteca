const express = require('express');
const EmprController = require('../controller/emprController');

class EmprRota{

    #router;

    get router(){
        return this.#router;
    }
    set router(router) {
        this.#router = router;
    }

    constructor() {
        this.#router = express.Router();
        const ctrl = new EmprController();
        this.#router.get("/", ctrl.Emprestimo);
        this.#router.get("/listar", ctrl.ListarEmprestimos);

    }

}
module.exports = EmprRota;