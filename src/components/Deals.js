import React from 'react'
import Image from 'next/image';
import image from "../../public/image.png";
import image1 from "../../public/image1.png"
import image2 from "../../public/image2.png"
import timer from "../../public/timer.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Deals() {
    return (
        <div>
            <div className="inline-flex gap-16">
                <div>
                    <h1 style={{color:"#34251F"}} className="text-5xl font-medium">Deals <span style={{color:"#D3A17E"}}>Of The Month</span></h1>
                    <h3 style={{color:"#8A8A8A"}} className="pt-3 w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis!
                    </h3>
                    <div className="mt-6">
                        <button style={{backgroundColor: "#34251F"}} className="pl-6 pr-6 pt-2.5 pb-2.5 text-white">Buy Now</button>
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
                    <div className="inline-flex pl-96 pt-72 mt-4">
                        <button className='mx-2 flex items-center justify-center' style={{ width: 35, height: 35, borderRadius: 25, backgroundColor: "#34251F",}}>
                            <BsArrowLeft size={26} color='#FFFFFF' />
                        </button>
                        <button className='mx-2 flex items-center justify-center' style={{ width: 35, height: 35, borderRadius: 25, backgroundColor: "#34251F"}}>
                            <BsArrowRight size={26} color='#FFFFFF' />
                        </button>
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