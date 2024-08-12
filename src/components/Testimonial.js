import React from 'react'
import Image from 'next/image'
import fram1 from '../../public/Frame1.png'
import fram2 from '../../public/Frame2.png'
import fram3 from '../../public/Frame3.png'
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from "react-icons/io5"

export default function Testimonial() {
    return (
        <div className="mt-10">
            <h1 className="flex items-center justify-center text-3xl font-medium">T <text className='text-red-300'>estimonials</text></h1>
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
            <div className="flex items-center justify-center pt-10 pb-10">
                <IoArrowBackCircleSharp className="mx-2" size={28} />
                <IoArrowForwardCircle className="mx-2" size={28} />
            </div>
        </div>
    )
}
