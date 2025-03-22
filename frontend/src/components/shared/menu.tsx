"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const path = usePathname();

    return (
        <nav className="flex gap-8 sm:mt-3 flex-wrap">
            <MenuItems href="/" selected={path === "/"}>Início</MenuItems>
            <MenuItems href="/projeto/1" selected={path.startsWith("/projeto")}>Projetos</MenuItems>
            <MenuItems href="https://wa.me/5581981585919" selected={false} newTab={true}>Contato</MenuItems>
        </nav>
    );
}

function MenuItems (props: {
    href: string;
    children: React.ReactNode;
    selected: boolean;
    newTab?: boolean;
}){
    return(
        <Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
            <span className={`flex items-center gap-2 text-sm font-bold border-red-600 hover:text-white
            ${props.selected ? "border-b-3 text-white" : "text-zinc-300"}`}>
                {props.children}
            </span>

        </Link>
    )
}