import React from 'react'
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import pic from "../../public/pic.png";
import dots from "../../public/dots.png";
import waves from "../../public/waves.png";

export default function Header() {
    return (
        <div>
            <div className="pt-20 pl-24 pr-16 pb-32">
                <div className="inline-flex gap-28">
                    <h1 className="text-3xl font-medium">DAVID MOORE</h1>
                    <div className="inline-flex gap-12">
                        <a href="/">
                            <h1>Home</h1>
                        </a>
                        <a href="/about">
                            <h1>About</h1>
                        </a>
                        <a href="/contact">
                            <h1>Contact</h1>
                        </a>
                        <a href="/shop">
                            <h1>Shop</h1>
                        </a>
                        <a href="/faqs">
                            <h1>Faqs</h1>
                        </a>
                    </div>
                    <div className="relative">
                        <CiSearch color="black" className="absolute top-2.5 m-1 transform -translate-y-1/2 text-neutral-500" />
                        <input
                            className="pl-7 text-neutral-600"
                            placeholder="Search for products.."
                        />
                        <div className="inline-flex gap-2 pt-1 pl-5">
                            <FaRegUser color="#696262"/>
                            <FaRegHeart color="#696262"/>
                            <MdOutlineShoppingBag color="#696262" />
                        </div>
                    </div>
                </div>
                <div className="pt-24 inline-flex">
                    <div className="max-w-screen-md">
                        <text className="bg-white p-2 pl-3 pr-3">Explore Fashion Like Never Before</text>
                        <h1 className="pt-10 pb-5 text-5xl font-medium text-stone-700">
                            Elevate Your Style With <text className="text-black">David Moore</text> Where Leather Speaks Volumes
                        </h1>
                        <p>
                            Step Into The World Of Peter Sign, Where Leather Transcends Mere <br/> Fashion And Becomes A Symbol Of Individuality And Confidence. With <br/> A Commitment To Quality And Style
                        </p>
                        <div className="mt-8">
                            <button className="bg-stone-700 pl-4 pr-4 pt-1 pb-1 text-white">Shop Now</button>
                        </div>
                    </div>
                    <div style={{borderBottomLeftRadius: "30%", backgroundColor: "#D3A17E", width: "350px"}}>
                        <div>
                            <Image src={dots} width={70}
                                style={{position:"absolute", top:"250px", right:"110px"}} 
                            />
                            <Image src={pic} width={610}
                                style={{ position:"absolute", top:"140px", right:"66px"}}
                            />
                            <Image src={dots} width={70}
                                style={{position:"absolute", top:"455px", right:"455px"}} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={waves} 
                    style={{position:"absolute", top:"460px"}}
                />
            </div>
        </div>
    )
}
