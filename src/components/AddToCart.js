import React from 'react'
import pic from "../../public/pic.png";
import Image from 'next/image';
import { FaStar, FaStarHalf, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";

export default function AddToCart() {
    return (
        <div>
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
        </div>
    )
}
