import Principal from "@/components/landing/principal";
import Curriculo from "@/components/curriculo";
import { getTecnologies } from "@/functions/tecnologias";
import Container from "@/components/shared/container";
import Projetos from "@/components/projetos/projetos";
import { getProjects } from "@/functions/projetos";

export default async function Home() {
  const tecnologias = await getTecnologies();
  const projetos = await getProjects();

  return (
    <>
      <Principal tecnologias={tecnologias.destaques}/>
      <Container className="py-16 flex flex-col items-center gap-10">
        <Projetos titulo="Destaques" lista={projetos.destaques} />
        {/* <Projetos titulo="Mobile" lista={projetos.mobile} /> */}
        <Projetos titulo="Web" lista={projetos.web} />
        {/* <Projetos titulo="Jogos" lista={projetos.jogos} /> */}
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </>
  );
}
