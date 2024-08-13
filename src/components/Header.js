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
            <div className="pt-12 pl-24 pr-14 pb-32">
                <div className="inline-flex">
                    <Image src={logo} style={{width:"224px", height:"37px"}}/>
                    <div className="inline-flex gap-11 pt-4 pl-32">
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
                    <div className="relative pt-3 pl-14">
                        <IoSearch color="black" size={19} className="absolute mr-7 right-72 mt-2.5 text-neutral-500" />
                        <input
                            style={{backgroundColor: "#EEDDCC", borderWidth: 1, borderColor: "#34251F"}}
                            className="pl-10 pt-2 pb-2 pr-4 text-black text-sm placeholder-yellow-950"
                            placeholder="Search for products.."
                        />
                        <div className="inline-flex gap-3 pl-5">
                            <FaRegUser color='#5e5252' size={20} className="mt-1"/>
                            <FaRegHeart color='#5e5252' size={20} className="mt-1"/>
                            <MdOutlineShoppingBag color="#5e5252" size={20} className="mt-1"/>
                        </div>
                    </div>
                </div>
                <div className="pt-24 inline-flex">
                    <div className="max-w-screen-md">
                        <span className="bg-white p-4 pl-7 pr-7 font-lato font-medium">Explore Fashion Like Never Before</span>
                        <h1 style={{color:"#34251F"}} className="pt-10 pb-5 text-5xl font-franl_ruhl_libre font-medium">
                            Elevate Your Style With <text className="text-black">David Moore</text> Where Leather Speaks Volumes
                        </h1>
                        <p style={{color: "rgba(0, 0, 0, 0.7)"}}>
                            Step Into The World Of Peter Sign, Where Leather Transcends Mere <br/> Fashion And Becomes A Symbol Of Individuality And Confidence. With <br/> A Commitment To Quality And Style
                        </p>
                        <div className="mt-8">
                            <button style={{backgroundColor:"#34251F"}} className="pl-6 pr-6 pt-2.5 pb-2.5 text-white">Shop Now</button>
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