import React from 'react'
import Image from 'next/image';
import image from "../../public/image.png";
import image1 from "../../public/image1.png"
import timer from "../../public/timer.png"
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"

export default function Deals() {
    const images = [image, image1, image, image];
    return (
        <div className="flex flex-col lg:flex-row">
            <div>
                <h1 style={{color:"#34251F"}} className="text-3xl lg:text-5xl font-medium">Deals <span style={{color:"#D3A17E"}}>Of The Month</span></h1>
                <h3 style={{color:"#8A8A8A"}} className="pt-3 lg:w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                    beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                    non unde itaque minus expedita quis!
                </h3>
                <div className="mt-6">
                    <button style={{backgroundColor: "#34251F"}} className="pl-6 pr-6 pt-2.5 pb-2.5 text-white">Buy Now</button>
                </div>
                <h3 className="pt-5 text-sm lg:text-lg">Hurry, Before It's Too Late!</h3>
                <div className="pt-2">
                    <Image src={timer} width={300} />
                </div>
            </div>
            
            <Carousel
                className="sm:mt-3 lg:ml-28 md:mx-10 w-full max-w-xs md:max-w-md lg:max-w-2xl"
            >
                <CarouselContent className="-ml-1">
                    {images.map((fram, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex p-6">
                            <Image src={fram} alt={`Frame ${index + 1}`} className="md:max-w-40 lg:max-w-72" />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex mb-10">
                    <CarouselPrevious className="left-20 mt-48 md:left-48 md:mt-40 lg:mt-60 lg:left-72"/>
                    <CarouselNext className="right-20 mt-48 md:right-40 md:mt-40 lg:mt-60 lg:right-72" />
                </div>
            </Carousel>
        </div>
    )
}