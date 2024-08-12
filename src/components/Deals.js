import React from 'react'
import Image from 'next/image';
import image from "../../public/image.png";
import image1 from "../../public/image1.png"
import image2 from "../../public/image2.png"
import timer from "../../public/timer.png"
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from "react-icons/io5"

export default function Deals() {
    return (
        <div>
            <div className="inline-flex gap-16">
                <div>
                    <h1 className="text-5xl font-light">Deals <text className='text-red-300'>Of The Month</text></h1>
                    <h3 className="pt-3 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis!
                    </h3>
                    <div className="mt-6">
                        <button className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Buy Now</button>
                    </div>
                    <h3 className="pt-5">Hurry, Before It's Too Late!</h3>
                    <div className="pt-2">
                        <Image src={timer} width={300} />
                    </div>
                </div>
                <div>
                    <Image src={image} width={250} 
                        style={{position:"absolute", right:"450px", top:"750px"}}
                    />
                </div>
                <div>
                    <Image src={image1} width={230} 
                        style={{position:"absolute", right:"150px", top:"750px"}}
                    />
                    <div className="inline-flex pl-96 pt-72">
                        <IoArrowBackCircleSharp size={28} className="mx-2"/>
                        <IoArrowForwardCircle size={28} className="mx-2"/>
                    </div>
                </div>
                <div >
                    <Image src={image2} width={90}
                        style={{position:"absolute", right:"5px", top:"750px"}}
                    />
                </div>
            </div>
            
        </div>
    )
}
