import React from 'react'
import Image from 'next/image'
import best from '../../public/best.png'

export default function BestLeather() {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 divide-x divide-transparent">
                <div className="pl-3">
                    <Image src={best} width={450} />
                </div>
                <div>
                    <h1 style={{color:"#34251F"}} className="lg:text-5xl mt-5 lg:mt-0 text-3xl font-medium">Best <span style={{color:"#D3A17E"}}>Leather Jackets</span> And It, Started Since 2014</h1>
                    <h3 style={{color:"#34251F"}} className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis
                    </h3>
                    <div className="bg-white mt-8">
                        <div className="flex flex-col items-center justify-center md:mt-5 md:mx-10 md:flex-row lg:flex-row lg:gap-7 lg:p-6 text-center">
                            <div>
                                <h1 className="text-4xl pt-4">2014</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">David Moore Started</p>
                            </div>
                            <h1 className="text-4xl md:mx-5">|</h1>
                            <div>
                                <h1 className="text-4xl pt-4"> 8900+</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">Product Sold</p>
                            </div>
                            <h1 className="text-4xl md:mx-5">|</h1>
                            <div>
                                <h1 className="text-4xl pt-4"> 3105+</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">Best Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 flex md:items-center md:justify-center">
                        <button style={{backgroundColor:"#34251F"}} className="lg:px-6 px-2 pt-2.5 pb-2.5 lg:text-sm text-base text-white">Start Shopping Now</button>
                    </div>
                </div>
            </div>
    )
}
