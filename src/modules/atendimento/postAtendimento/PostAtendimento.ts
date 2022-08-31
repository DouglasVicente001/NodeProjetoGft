import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";

export class PostAtendimento {
    async execute({ post }: IPostAtendimentosDTO): Promise<void> {
        for (let index = 0; index < post.length; index++) {

            const clienteExistente = await prisma.atendimento.findUnique({
                where: {
                    id: post[index].clienteId,
                },
            });
            if (clienteExistente) {
                throw new AppError(`Um dos id's ja cadastrado.`, 404)
            }

        await prisma.atendimento.createMany({
            data: post
        });
    }
}
}