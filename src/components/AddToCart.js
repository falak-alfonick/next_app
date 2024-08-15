import React from 'react'
import jac1 from "../../public/Group1.png";
import jac2 from "../../public/Group2.png";
import jac3 from "../../public/Group3.png";
import jac4 from "../../public/Group4.png";
import Image from 'next/image';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "./ui/carousel"

export default function AddToCart() {
    return (
        <div className="mt-10">
            <div>
                <Carousel opts={{ align: "start" }} className="w-full max-w-6xl">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                            <div className='p-2'>
                            <Image src={jac1} width={250} style={{position:"relative"}}/>
                            <h3 style={{color:"#34251F"}} className="pt-2 font-medium">Leather Jacket <span className="lg:pl-24 md:pl-12 font-medium">$120</span> </h3>
                            <p style={{color:"rgba(0, 0, 0, 0.7)"}} className="text-sm pt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                            <div className="inline-flex pt-2">
                                <FaStar color="yellow" />
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStarHalf color="yellow" />
                                <p className="mt-0.5 text-xs">4.5/5</p>
                            </div>
                            <div className="pt-5">
                                <button style={{borderWidth:1, backgroundColor:"#34251F"}} className="pl-5 pr-5 pt-2.5 pb-2.5 text-sm text-white">Add To Cart</button>
                            </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className='p-2'>
                            <Image src={jac2} width={250} style={{position:"relative"}}/>
                            <h3 className="pt-2 font-medium">Leather Jacket <span style={{color:"#D3A17E"}} className="lg:pl-24 md:pl-12 font-medium">$120</span> </h3>
                            <p style={{color:"rgba(0, 0, 0, 0.7)"}} className="text-sm pt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                            <div className="inline-flex pt-2">
                                <FaStar color="yellow" />
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStarHalf color="yellow" />
                                <p className="mt-0.5 text-xs">4.5/5</p>
                            </div>
                            <div className="pt-5">
                                <button style={{borderWidth:1, borderColor:"#D3A17E"}} className="pl-5 pr-5 pt-2.5 pb-2.5 text-sm text-black">Add To Cart</button>
                            </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className='p-2'>
                            <Image src={jac3} width={250} style={{position:"relative"}}/>
                            <h3 className="pt-2 font-medium">Leather Jacket <span style={{color:"#D3A17E"}} className="lg:pl-24 md:pl-12 font-medium">$120</span> </h3>
                            <p style={{color:"rgba(0, 0, 0, 0.7)"}} className="text-sm pt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                            <div className="inline-flex pt-2">
                                <FaStar color="yellow" />
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStarHalf color="yellow" />
                                <p className="mt-0.5 text-xs">4.5/5</p>
                            </div>
                            <div className="pt-5">
                                <button style={{borderWidth:1, borderColor:"#D3A17E"}} className="pl-5 pr-5 pt-2.5 pb-2.5 text-sm text-black">Add To Cart</button>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className='p-2'>
                            <Image src={jac4} width={250} style={{position:"relative"}}/>
                            <h3 className="pt-2 font-medium">Leather Jacket <span style={{color:"#D3A17E"}} className="lg:pl-24 md:pl-12 font-medium">$120</span> </h3>
                            <p style={{color:"rgba(0, 0, 0, 0.7)"}} className="text-sm pt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                            <div className="inline-flex pt-2">
                                <FaStar color="yellow" />
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStarHalf color="yellow" />
                                <p className="mt-0.5 text-xs">4.5/5</p>
                            </div>
                            <div className="pt-5">
                                <button style={{borderWidth:1, borderColor:"#D3A17E"}} className="pl-5 pr-5 pt-2.5 pb-2.5 text-sm text-black">Add To Cart</button>
                            </div>
                        </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className='p-2'>
                            <Image src={jac2} width={250} style={{position:"relative"}}/>
                            <h3 className="pt-2 font-medium">Leather Jacket <span style={{color:"#D3A17E"}} className="lg:pl-24 md:pl-12 font-medium">$120</span> </h3>
                            <p style={{color:"rgba(0, 0, 0, 0.7)"}} className="text-sm pt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                            <div className="inline-flex pt-2">
                                <FaStar color="yellow" />
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStar color="yellow" /> 
                                <FaStarHalf color="yellow" />
                                <p className="mt-0.5 text-xs">4.5/5</p>
                            </div>
                            <div className="pt-5">
                                <button style={{borderWidth:1, borderColor:"#D3A17E"}} className="pl-5 pr-5 pt-2.5 pb-2.5 text-sm text-black">Add To Cart</button>
                            </div>
                        </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="flex place-items-center justify-center pt-44">
                        <CarouselPrevious className="mt-44 left-6 lg:left-80 md:ml-56"/>
                        <CarouselNext className="mt-44 right-24 lg:right-72 md:mr-60"/>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}