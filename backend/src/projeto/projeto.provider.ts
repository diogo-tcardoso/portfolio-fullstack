import { Injectable } from "@nestjs/common";
import { Projeto } from "@core";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjetoProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodos(): Promise<Projeto[]> {
		const projetos = await this.prisma.projeto.findMany({
			include: { tecnologias: true },
		});

		return projetos.map((projeto) => ({
			...projeto,
			tipo: projeto.tipo as Projeto["tipo"],
		}));
	}

	async obterPorId(id: number): Promise<Projeto | null> {
		const projeto = await this.prisma.projeto.findUnique({
			where: { id },
			include: { tecnologias: true },
		});

		if (!projeto) return null;

		return {
			...projeto,
			tipo: projeto.tipo as Projeto["tipo"],
		};
	}
}
