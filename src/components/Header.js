import React from 'react'
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import pic from "../../public/pic.png";
import dots from "../../public/dots.png";
import waves from "../../public/waves.png";
import logo from "../../public/logo.png"

export default function Header() {
    return (
        <div>
            <div className="pt-12 lg:pl-24 pl-12 pr-14 lg:pb-12">
                <div className="flex flex-col lg:flex-row">
                    <Image src={logo} style={{width:"224px", height:"37px"}}/>
                    <div className="flex flex-col md:flex-row lg:flex-row md:gap-5 lg:gap-11 gap-2 lg:pt-4 pt-3 lg:pl-32">
                        <a href="/">
                            <h1 className="font-poppins font-medium text-lg tracking-tight">Home</h1>
                        </a>
                        <a href="/about">
                            <h1 className="font-poppins font-medium text-lg tracking-tight">About</h1>
                        </a>
                        <a href="/contact">
                            <h1 className="font-poppins font-medium text-lg tracking-tight">Contact</h1>
                        </a>
                        <a href="/shop">
                            <h1 className="font-poppins font-medium text-lg tracking-tight">Shop</h1>
                        </a>
                        <a href="/faqs">
                            <h1 className="font-poppins font-medium text-lg tracking-tight">Faqs</h1>
                        </a>
                    </div>
                    <div className="relative pl-0 lg:pt-3 pt-6 lg:pl-14">
                        <IoSearch color="black" size={19} className="absolute mt-2 ml-4 lg:mr-7 lg:right-72 lg:mt-2.5 text-neutral-500" />
                        <input
                            style={{backgroundColor: "#EEDDCC", borderWidth: 1, borderColor: "#34251F"}}
                            className="pl-10 pt-2 pb-2 pr-4 text-black text-sm placeholder-yellow-950"
                            placeholder="Search for products.."
                        />
                        <div className="inline-flex lg:pt-0 pt-4 gap-4 lg:gap-3 lg:pl-5">
                            <FaRegUser color='#5e5252' size={20} className="mt-1"/>
                            <FaRegHeart color='#5e5252' size={20} className="mt-1"/>
                            <MdOutlineShoppingBag color="#5e5252" size={20} className="mt-1"/>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row pt-24">
                    <div className="lg:max-w-screen-md">
                        <span className="bg-white text-sm lg:text-lg px-2 py-3 lg:px-7 font-lato font-medium">Explore Fashion Like Never Before</span>
                        <h1 style={{color:"#34251F"}} className="pt-10 pb-5 text-3xl lg:text-5xl font-franl_ruhl_libre font-medium">
                            Elevate Your Style With <text className="text-black">David Moore</text> Where Leather Speaks Volumes
                        </h1>
                        <p style={{color: "rgba(0, 0, 0, 0.7)"}}>
                            Step Into The World Of Peter Sign, Where Leather Transcends Mere <br/> Fashion And Becomes A Symbol Of Individuality And Confidence. With <br/> A Commitment To Quality And Style
                        </p>
                        <div className="mt-8">
                            <button style={{backgroundColor:"#34251F"}} className="pl-6 pr-6 pt-2.5 pb-2.5 text-white">Shop Now</button>
                        </div>
                    </div>
                    <div className="lg:pt-0 lg:pl-16">
                        <div>
                            <Image src={dots} width={70} className="left-56 md:left-60 lg:left-64 top-20"
                                style={{position:"relative"}} 
                            />
                            <div style={{borderBottomLeftRadius: "30%", backgroundColor: "#D3A17E"}}>
                                <Image src={pic} width={300} 
                                    style={{bottom:"25px"}}
                                />
                            </div>
                            <Image src={dots} width={70} className="right-6 bottom-28"
                                style={{position:"relative"}} 
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