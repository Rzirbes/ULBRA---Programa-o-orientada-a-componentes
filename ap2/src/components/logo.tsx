import Image from 'next/image'

export default function Logo(){
    return(
        <div>
            <Image 
                alt='Imagem logo'
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLIaWSHOIoO6Lr2CXfqhQMpy8inASN4v6zvA&s"}
                width={90}
                height={90}
                className='rounded-full'
            />
        </div>
    )
}