import CarroselImagens from "@/components/shared/carrossel-imagens";
import Container from "@/components/shared/container";
import Header from "@/components/shared/header"
import Tecnologias from "@/components/tecnologias/tecnologias";
import { getProject } from "@/functions/projetos";

export default async function ProjectPage(props: {params: Promise<{id: string}>}){
    const { id } = await props.params;
    const projeto = await getProject(id);

    return projeto ? (
        <div className="bg-black">
            <Header />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
                <CarroselImagens imagens={projeto.imagens.slice(1)} />
                <Tecnologias lista={projeto.tecnologias} tamanhoMenor/>
            </Container>
        </div>
    ) : null;
}