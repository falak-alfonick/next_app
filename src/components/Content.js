import React from 'react'
import pic from "../../public/pic.png";
import Image from 'next/image';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AddToCart from './AddToCart';
import cloth from '../../public/cloth.jpg';

export default function Content() {
    return (
        <div className="pt-20 pl-24 pr-16">
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
                </div>
                <div style={{borderWidth:1, borderColor: "black", width:'250px'}}>
                    <Image src={pic} width={435} 
                        style={{position:"absolute", right:"450px", top:"750px"}}
                    />
                </div>
                <div style={{borderWidth:1, borderColor: "black", width:'250px', height:"235px"}}>
                    <Image src={pic} width={375} 
                        style={{position:"absolute", right:"150px", top:"750px"}}
                    />
                </div>
            </div>
            <div className="p-3 justify-items-center">
                <FaArrowAltCircleLeft />
                <FaArrowAltCircleRight />
            </div>
            <AddToCart />
            <div className="mt-10 grid grid-cols-2 divide-x">
                <div style={{borderTopLeftRadius: 90, background:'grey', width:"470px", height:"450px"}} className="pl-3">
                    <Image src={pic} />
                </div>
                <div>
                    <h1 className="text-4xl font-medium">Best <text className='text-red-300'>Leather Jackets</text> And It, Started Since 2014</h1>
                    <h3 className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis
                    </h3>
                    <div className="bg-white mt-8">
                        <div className="gap-7 p-4 text-center inline-flex">
                            <h1 className="text-4xl">2014</h1>
                            <h1 className="text-4xl">|</h1>
                            <h1 className="text-4xl"> 8900+</h1>
                            <h1 className="text-4xl">|</h1>
                            <h1 className="text-4xl"> 3105+</h1>
                        </div>
                    </div>
                    <div className="pt-5">
                        <button className="bg-stone-700 pl-4 pr-4 pt-1.5 pb-1.5 text-white">Start Shopping Now</button>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <AddToCart />
            </div>
            {/* <div className="mt-10 ">
                <div className="inline-flex">
                    <h1 className="text-4xl font-medium"> <text className='text-red-300 '>David Moore's</text> Latest Collection In Our Exlusive Video</h1>
                    <div className="max-w-screen-sm pl-32">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                            beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                            non unde itaque minus expedita quis! 
                        </h3>
                    </div>
                </div>
                <div className="pt-5">
                    <div>
                        <Image src={cloth} 
                            width={600}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
