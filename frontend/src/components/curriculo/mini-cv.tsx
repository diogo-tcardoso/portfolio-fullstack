import Image from "next/image"

export default function MiniCV(){
    return (
        <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row
        lg:items-center bg-black border
        border-zinc-800 rounded-2xl px-3 gap-6">
            <div className="relative min-w-64 h-60 xl:self-end">
                <Image src={'/minha-foto.png'} alt="foto perfil" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent
                    bg-clip-text text-2xl font-bold">Diogo Cardoso</span>
                    <span>Desenvolvedor Fullstack</span>
                </div>
                <p className="text-sm text-center md:text-left xl:text-left lg:text-center">Desenvolvedor fullstack, apaixonado por tecnologia e com animo de adquirir nóvos conhecimentos. Trabalhou por 20 anos como despachante aduaneiro, sendo proatiavo, buscando o melhor caminho para a resolução de problemas, tendo uma boa comunicação com os órgãos anuentes e prezando pela ética. Por 2 anos foi sócio em um restaurante onde ficou responsável pela parte financeira, controle de estoque e ajudando no atendimento ao público. Hoje em transição de carreira, se dedicou ao desenvolvimento web, sempre buscando o aperfeiçoamento.</p>
            </div>


        </div>
    )
}