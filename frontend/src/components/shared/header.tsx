import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import Menu from "./menu";

export default function Header (){
    return (
        <header className="flex items-center h-16 bg-black/50 w-full">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center">
                <Link
                    href="https://www.linkedin.com/in/diogo-tcardoso/"
                    target="_blank"
                    className="bg-red-600 text-sm font-bold px-7 py-1 rounded-full"
                >LinkedIn</Link>
                </div>
                
            </Container>
        </header>
    )
}