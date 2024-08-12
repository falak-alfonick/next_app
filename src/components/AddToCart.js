import React from 'react'
import jac1 from "../../public/Group1.png";
import jac2 from "../../public/Group2.png";
import jac3 from "../../public/Group3.png";
import jac4 from "../../public/Group4.png";
import Image from 'next/image';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from "react-icons/io5"

export default function AddToCart() {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-4 divide-x gap-5">
                <div>
                    <Image src={jac1} width={250} style={{position:"relative"}}/>
                    <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24">$120</text> </h3>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p className="text-sm">4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button style={{borderWidth:1}} className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <Image src={jac2} width={250} style={{position:"relative"}}/>
                    <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p className="text-sm">4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button style={{borderWidth:1}} className="border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <Image src={jac3} width={250} style={{position:"relative"}}/>
                    <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p className="text-sm">4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button style={{borderWidth:1}} className= "border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
                <div>
                    <Image src={jac4} width={250} style={{position:"relative"}}/>
                    <h3 className="pt-2 font-medium">Leather Jacket <text className="pl-24 text-orange-400">$120</text> </h3>
                    <p>Leather Transcends Mere Fashion And Becomes A Symbol</p>
                    <div className="inline-flex">
                        <FaStar color="yellow" />
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStar color="yellow" /> 
                        <FaStarHalf color="yellow" />
                        <p className="text-sm">4.5/5</p>
                    </div>
                    <div className="pt-3">
                        <button style={{borderWidth:1}} className="border-orange-400 pl-4 pr-4 pt-1 pb-1 text-black">Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pt-10 pb-10">
                <IoArrowBackCircleSharp className="mx-2" size={28} />
                <IoArrowForwardCircle className="mx-2" size={28} />
            </div>
        </div>
    )
}
