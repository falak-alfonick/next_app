import React from 'react'
import Image from 'next/image'
import fram1 from '../../public/Frame1.png'
import fram2 from '../../public/Frame2.png'
import fram3 from '../../public/Frame3.png'
import abc from '../../public/1.jpg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"

export default function Testimonial() {
    return (
        <div>
            <h1 style={{color:"#34251F"}} className="flex items-center justify-center text-4xl font-medium">T <span style={{color:"#D3A17E"}}>estimonials</span></h1>
            <Carousel opts={{ align: "start" }} className="m-10 w-full max-w-7xl">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='p-2'>
                                <Image src={fram1} width={340}/>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='p-2'>
                                <Image src={abc} width={400} height={250} />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='p-2'>
                                <Image src={fram3} width={340} />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className='p-2'>
                                <Image src={fram2} width={680} />
                            </div>
                        </CarouselItem>
                        
                    </CarouselContent>
                    <div className="flex place-items-center justify-center mb-14">
                        <CarouselPrevious className="mt-36 left-24 lg:left-96 lg:ml-48 md:ml-80"/>
                        <CarouselNext className="mt-36 right-44 lg:right-80 lg:mr-72 md:mr-40" />
                    </div>
                </Carousel>
        </div>
    )
}
