import Image from "next/image";
import Container from "./container";
import Link from "next/link";

export default function Header (){
    return (
        <header className="flex items-center h-16">
            <Container className="flex-1">
                <div>
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>
                </div>    
            </Container>
        </header>
    )
}