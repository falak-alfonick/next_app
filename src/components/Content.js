import React from 'react'
import pic from "../../public/pic.png";
import Image from 'next/image';
import { FaStar, FaStarHalf, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";

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
            <div className="mt-10">
                <div className="justify-center text-center">
                    <h1 className="text-3xl font-medium">Discover <text className='text-red-300'>Latest Leather Fashion</text> <br/> New Arrivals</h1>
                    <p>Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
                </div>
                <div className="grid grid-cols-4 divide-x gap-5">
                    <div>
                        <div style={{position:"relative", left:"220px", top:"40px"}}>
                            <FaRegHeart />
                        </div>
                        <Image src={pic} style={{position:"relative", right:"50px"}}/>
                        <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24">$120</text> </h3>
                        <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                        <div className="inline-flex">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStarHalf color="yellow" />
                            <p>4.5/5</p>
                        </div>
                        <div className="pt-3">
                            <button style={{borderWidth:1}} className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Add To Cart</button>
                        </div>
                    </div>
                    <div>
                        <div style={{position:"relative", left:"220px", top:"40px"}}>
                            <FaRegHeart />
                        </div>
                        <Image src={pic} style={{position:"relative", right:"50px"}}/>
                        <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                        <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                        <div className="inline-flex">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStarHalf color="yellow" />
                            <p>4.5/5</p>
                        </div>
                        <div className="pt-3">
                            <button style={{borderWidth:1}} className="border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                        </div>
                    </div>
                    <div>
                        <div style={{position:"relative", left:"220px", top:"40px"}}>
                            <FaRegHeart />
                        </div>
                        <Image src={pic} style={{position:"relative", right:"50px"}}/>
                        <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                        <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                        <div className="inline-flex">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStarHalf color="yellow" />
                            <p>4.5/5</p>
                        </div>
                        <div className="pt-3">
                            <button style={{borderWidth:1}} className= "border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                        </div>
                    </div>
                    <div>
                        <div style={{position:"relative", left:"220px", top:"40px"}}>
                            <FaRegHeart />
                        </div>
                        <Image src={pic} style={{position:"relative", right:"50px"}}/>
                        <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                        <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                        <div className="inline-flex">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStarHalf color="yellow" />
                            <p>4.5/5</p>
                        </div>
                        <div className="pt-3">
                            <button style={{borderWidth:1}} className="border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="inline-flex pt-3 justify-items-center">
                    <FaArrowAltCircleLeft />
                    <FaArrowAltCircleRight />
                </div>
            </div>
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
        </div>
    )
}
