import { Tecnologia } from "@core"
import TecnologiasTrabalhadas from "./tecnologias-trabalhadas"
import Experiencia from "./experiencia"
import MiniCV from "./mini-cv"

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps){
    return (
        <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MiniCV />
            <Experiencia />
            <TecnologiasTrabalhadas lista={props.tecnologias} />
        </div>
    )
}