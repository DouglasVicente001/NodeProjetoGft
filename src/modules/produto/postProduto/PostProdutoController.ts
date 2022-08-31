import { Request, Response } from "express";
import { PostProduto } from "./PostProduto";



export class PostProdutoController {
    async handle(req: Request, res: Response){

        const {preco, vestCasual, vestEsporte, vestSocial} = req.body;

        const postCliente = new PostProduto();

        const result = await postCliente.execute({preco, vestCasual, vestEsporte, vestSocial});

        return res.status(201).json(result)
    }
}