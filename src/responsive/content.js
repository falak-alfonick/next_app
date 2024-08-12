import React from 'react';
import pic from "../../public/pic.png";
import image from "../../public/image.png";
import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import Image from 'next/image';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AddToCart from './AddToCart';

export default function Content() {
    return (
        <div className="pt-20 px-4 md:px-24">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div>
                    <h1 className="text-3xl md:text-5xl font-light">
                        Deals <span className='text-red-300'>Of The Month</span>
                    </h1>
                    <h3 className="pt-3 w-full md:w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis!
                    </h3>
                    <div className="mt-6">
                        <button className="bg-stone-700 px-4 py-2 text-white">Buy Now</button>
                    </div>
                    <h3 className="pt-5">Hurry, Before It's Too Late!</h3>
                </div>
                <div className="relative flex justify-center md:block">
                    <Image src={image} width={250} 
                        className="absolute right-0 md:right-36 top-20 md:top-60"
                    />
                </div>
                <div className="relative flex justify-center md:block">
                    <Image src={image1} width={230} 
                        className="absolute right-0 md:right-6 top-20 md:top-60"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center p-3 mt-6">
                <FaArrowAltCircleLeft className="text-2xl" />
                <FaArrowAltCircleRight className="text-2xl" />
            </div>
            <AddToCart />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x md:divide-y-0">
                <div style={{borderTopLeftRadius: 90, background:'grey', width:"100%", height:"450px"}} className="pl-3">
                    <Image src={pic} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                    <h1 className="text-3xl md:text-4xl font-medium">
                        Best <span className='text-red-300'>Leather Jackets</span> And It, Started Since 2014
                    </h1>
                    <h3 className="mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis
                    </h3>
                    <div className="bg-white mt-8">
                        <div className="gap-7 p-4 text-center inline-flex">
                            <h1 className="text-xl md:text-4xl">2014</h1>
                            <h1 className="text-xl md:text-4xl">|</h1>
                            <h1 className="text-xl md:text-4xl"> 8900+</h1>
                            <h1 className="text-xl md:text-4xl">|</h1>
                            <h1 className="text-xl md:text-4xl"> 3105+</h1>
                        </div>
                    </div>
                    <div className="pt-5">
                        <button className="bg-stone-700 px-4 py-2 text-white">Start Shopping Now</button>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <AddToCart />
            </div>
        </div>
    );
}
