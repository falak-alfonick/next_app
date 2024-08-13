import React from 'react'
import Image from 'next/image'
import best from '../../public/best.png'

export default function BestLeather() {
    return (
        <div className="mt-10 grid grid-cols-2 divide-x divide-transparent">
                <div className="pl-3">
                    <Image src={best} width={450} />
                </div>
                <div>
                    <h1 style={{color:"#34251F"}} className="text-5xl font-medium">Best <span style={{color:"#D3A17E"}}>Leather Jackets</span> And It, Started Since 2014</h1>
                    <h3 style={{color:"#34251F"}} className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque aliquid magnam 
                        beatae hic deserunt tempora iure illo labore nemo cupiditate aut, accusamus incidunt, 
                        non unde itaque minus expedita quis
                    </h3>
                    <div className="bg-white mt-8">
                        <div className="gap-7 p-6 text-center inline-flex">
                            <div>
                                <h1 className="text-4xl">2014</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">David Moore Started</p>
                            </div>
                            <h1 className="text-4xl">|</h1>
                            <div>
                                <h1 className="text-4xl"> 8900+</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">Product Sold</p>
                            </div>
                            <h1 className="text-4xl">|</h1>
                            <div>
                                <h1 className="text-4xl"> 3105+</h1>
                                <p style={{color:"#D3A17E"}} className="pt-2">Best Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <button style={{backgroundColor:"#34251F"}} className="pl-6 pr-6 pt-2.5 pb-2.5 text-sm text-white">Start Shopping Now</button>
                    </div>
                </div>
            </div>
    )
}
