import { Tecnologia } from "@core"
import TecnologiasTrabalhadas from "./tecnologias-trabalhadas"

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps){
    return (
        <>
            <TecnologiasTrabalhadas tecnologias={props.tecnologias} />
        </>
    )
}