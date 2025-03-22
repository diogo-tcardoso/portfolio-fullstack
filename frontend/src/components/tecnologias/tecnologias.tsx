import { Tecnologia } from "@core"
import Image from "next/image";

export interface TecnologiasProps {
    lista: Tecnologia[]
}

export default function Tecnologias(props: TecnologiasProps){
    return props.lista ? (
        <div className="flex justify-center gap-4 flex-wrap w-4/5">
            {props.lista.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col gap-1 items-center">
                    <span className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
                        <Image src={tecnologia.imagem} alt={tecnologia.nome} fill className="object-contain"/>
                    </span>
                    <span className="text-zinc-500 text-[13px]">{tecnologia.nome}</span>
                </div>
            ))}
        </div>
    ) : null;
}