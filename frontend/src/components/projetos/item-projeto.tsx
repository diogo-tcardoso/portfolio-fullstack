import { Projeto } from "@core";
import Link from "next/link";
import Image from "next/image";

export interface ItemProjetoProps {
    projeto: Projeto;
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projetos/${props.projeto.id}`}>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w64 min-h-64">
                <Image src={props.projeto.imagens[0]} alt={props.projeto.nome} fill className="object-cover" />
            </div>
        </Link>

    )
}