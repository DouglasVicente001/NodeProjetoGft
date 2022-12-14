
import { Cliente, Produto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostClientesDTO } from "../../dtos/postClientesDTO";
import { IPostProdutosDTO } from "../../dtos/postProdutosDTO";
import { AppError } from "../../errors/AppError";

export class PostProduto {
    async execute ({preco, vestCasual, vestEsporte, vestSocial}: IPostProdutosDTO): Promise<Produto>{
         
        const usuarioExiste = await prisma.cliente.findUnique({
            where: {
                id: Number()
            }
        });
        if (usuarioExiste){
            throw new AppError(`O email já está sendo utilizado.`, 409)
        }

        const cliente = await prisma.produto.create({
            data: {
                preco, vestCasual, vestEsporte, vestSocial
            }
        })
        return cliente;
    }
}