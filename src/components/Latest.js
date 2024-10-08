import React from 'react'
import Image from 'next/image'
import late from '../../public/Group5.png'

export default function Latest() {
    return (
        <div className="mt-5">
            <div className="flex flex-col lg:flex-row">
                <h1 style={{color:"#34251F"}} className="lg:text-4xl text-2xl font-medium"> <span style={{color:"#D3A17E"}} >David Moore's</span> Latest Collection In Our Exlusive Video</h1>
                <div className="lg:max-w-screen-sm w-full lg:pl-52">
                    <h3 style={{color:"rgba(0, 0, 0, 0.6)"}} className="text-sm font-medium-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis! 
                    </h3>
                </div>
            </div>
            <div className="pt-5 pb-10">
                <div className="w-full">
                    <Image src={late} />
                </div>
            </div>
        </div>
    )
}
