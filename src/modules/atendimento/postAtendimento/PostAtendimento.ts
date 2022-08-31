import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";

export class PostAtendimento {
    async execute({ post }: IPostAtendimentosDTO): Promise<void> {
        for (let index = 0; index < post.length; index++) {

            const etiquetaExistente = await prisma.atendimento.findUnique({
                where: {
                    email: post[index].email,
                },
            });
            if (!etiquetaExistente) {
                throw new AppError(`Um dos emails ja cadastrados.`, 404)
            }
            
        }
        await prisma.atendimento.createMany({
            data: post
        });
    }
}