import React from 'react'
import Image from 'next/image'
import fram2 from '../../public/Frame2.png'
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"

export default function Testimonial() {
    const images = [fram2, fram2, fram2, fram2];

    return (
        <div>
            <h1 style={{color:"#34251F"}} className="flex items-center justify-center text-3xl lg:text-5xl font-medium">T <span style={{color:"#D3A17E"}}>estimonials</span></h1>
            <Carousel
                className="mt-5 lg:mx-10 md:w-full sm:w-full sm:max-w-xm lg:max-w-7xl"
                >
                <CarouselContent className="-ml-1">
                    {images.map((fram, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex p-6">
                                    <Image src={fram} alt={`Frame ${index + 1}`} className="md:max-w-xs lg:max-w-xl" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex mb-10 md:mb-20">
                    <CarouselPrevious className="mt-32 lg:mt-40 left-40 lg:left-96 lg:ml-48 md:ml-52"/>
                    <CarouselNext className="mt-32 lg:mt-40 right-40 lg:right-80 lg:mr-72 md:mr-40" />
                </div>
            </Carousel>
        </div>
    )
}
