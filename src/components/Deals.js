import React from 'react'
import Image from 'next/image';
import image from "../../public/image.png";
import image1 from "../../public/image1.png"
import image2 from "../../public/image2.png"
import timer from "../../public/timer.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"

export default function Deals() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row ">
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
                <div className="mt-10 lg:ml-72 md:pt-10">
                    <Carousel opts={{ align: "start" }} className="w-full max-w-6xl">
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Image src={image} width={250} height={300}
                                    style={{position:"relative"}} 
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Image src={image1} width={230} 
                                    style={{position:"relative"}}
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Image src={image2} width={100} 
                                    style={{position:"relative"}}
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Image src={image2} width={100}
                                    style={{position:"relative"}}
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <div className="flex place-items-center justify-center mb-10">
                            <CarouselPrevious className="left-16 md:left-48 mt-52 lg:left-48"/>
                            <CarouselNext className="right-16 md:right-72 mt-52 lg:right-60" />
                        </div>
                    </Carousel>
                </div>
            </div>
            
        </div>
    )
}