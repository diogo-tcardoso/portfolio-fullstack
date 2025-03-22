import Principal from "@/components/landing/principal";
import Curriculo from "@/components/curriculo";
import { getTecnologies } from "@/functions/tecnologias";
import Container from "@/components/shared/container";

export default async function Home() {
  const tecnologias = await getTecnologies();

  return (
    <>
      <Principal />
      <Container className="py-12">
        <Curriculo tecnologias={tecnologias.todas} />
      </Container>
    </>
  );
}
