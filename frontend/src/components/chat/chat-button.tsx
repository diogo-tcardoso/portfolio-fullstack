import Image from 'next/image'
export default function ChatButton (){
    return (
        <div className='fixed botton-5 right-5 cursor-pointer'>
            <Image src={'/chat.svg'} alt='Chat' width={50} height={50} />
        </div>
    )
}