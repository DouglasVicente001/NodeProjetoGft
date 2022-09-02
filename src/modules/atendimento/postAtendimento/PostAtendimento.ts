import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";

export class PostAtendimento {
    async execute({ post }: IPostAtendimentosDTO): Promise<void> {
        for (let index = 0; index < post.length; index++) {

            

        await prisma.atendimento.createMany({
            data: post
        });
    }
}
}