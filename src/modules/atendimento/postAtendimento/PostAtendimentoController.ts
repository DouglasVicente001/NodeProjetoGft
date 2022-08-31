import { PostAtendimento } from './PostAtendimento';
import { Request, Response } from "express";


export class PostAtendimentoController {
    async handle(req: Request, res: Response) {
        const { post } = req.body;

        const postAtendimento = new PostAtendimento();

        const result = await postAtendimento.execute({ post })

        return res.status(201).json(result);
    }
}