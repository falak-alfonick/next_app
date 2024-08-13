import React from 'react'
import Image from 'next/image'
import fram1 from '../../public/Frame1.png'
import fram2 from '../../public/Frame2.png'
import fram3 from '../../public/Frame3.png'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Testimonial() {
    return (
        <div className="mt-10">
            <h1 style={{color:"#34251F"}} className="flex items-center justify-center text-4xl font-medium">T <span style={{color:"#D3A17E"}}>estimonials</span></h1>
            <div className="pt-12 inline-flex">
                <div style={{width:"25%"}}>
                    <Image src={fram1} />
                </div>
                <div style={{width:"50%"}}>
                    <Image src={fram2}  className="pl-4 pr-4"/>
                </div>
                <div style={{width:"25%"}}>
                    <Image src={fram3} />
                </div>
            </div>
            <div className="flex items-center justify-center pt-14 pb-10">
                <button className='mx-2 flex items-center justify-center' style={{ width: 35, height: 35, borderRadius: 25, backgroundColor: "#34251F",}}>
                   <BsArrowLeft size={26} color='#FFFFFF' />
                </button>
                <button className='mx-2 flex items-center justify-center' style={{ width: 35, height: 35, borderRadius: 25, backgroundColor: "#34251F"}}>
                    <BsArrowRight size={26} color='#FFFFFF' />
                </button>
            </div>
        </div>
    )
}
