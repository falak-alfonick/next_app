import React from 'react'
import Image from 'next/image'
import late from '../../public/Group5.png'

export default function Latest() {
    return (
        <div className="mt-5">
            <div className="inline-flex">
                <h1 className="text-4xl font-medium"> <text className='text-red-300 '>David Moore's</text> Latest Collection In Our Exlusive Video</h1>
                <div className="max-w-screen-sm pl-32">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
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
