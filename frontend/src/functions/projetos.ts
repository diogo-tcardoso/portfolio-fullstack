import { Projeto, Tipo } from "@core";
import { httpGet } from "./api";

export async function getProjects() {
    const projects: Projeto[] = await httpGet("/projetos");

    return {
        todos: projects,
        get mobile() {
            return projects.filter((project) => project.tipo === Tipo.MOBILE)
        },
        get web() {
            return projects.filter((project) => project.tipo === Tipo.WEB)
        },
        get jogos() {
            return projects.filter((project) => project.tipo === Tipo.JOGO)
        },
        get destaques() {
            return projects.filter((project) => project.destaque)
        }
    }
}

export async function getProject (id: string): Promise<Projeto | null> {
    return await httpGet(`/projetos/${id}`);
}