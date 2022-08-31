import { Atendimento } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";


export class PostAtendimento {
    async execute({ email }: IPostAtendimentosDTO): Promise<Atendimento> {

        const atendimentoExiste = await prisma.atendimento.findUnique({
            where: {
                email
            }
        });
        if (atendimentoExiste) {
            throw new AppError(`O atendimento '${email}' ja está cadastrado`, 409)
        }

        const atendimento = await prisma.atendimento.create({
            data: {
                email
            }
        })
        return atendimento;
    }
}