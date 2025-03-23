import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image';

export interface CarrosselImagensProps {
    imagens: string[];
}

export default function CarroselImagens (props: CarrosselImagensProps) {
    return (
        <Carousel opts={{loop: true}} className='xl:w-full md:w-11/12 w-7/10'>
            <CarouselContent>
                {props.imagens.map((imagem) => (
                    <CarouselItem key={imagem} className='relative w-full h-96'>
                        <Image src={imagem} alt="Imagem do projeto" fill className='object-cover' />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}