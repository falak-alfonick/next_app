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
            <div className="flex flex-col lg:flex-row lg:pt-12 pt-6 gap-3 lg:gap-1">
                <div>
                    <Image src={fram1} width={340}/>
                </div>
                <div>
                    <Image src={fram2} width={680} className="pl-4 pr-4"/>
                </div>
                <div>
                    <Image src={fram3} width={340} />
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
