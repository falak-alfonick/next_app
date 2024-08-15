import React from 'react'
import AddToCart from './AddToCart';
import Deals from './Deals';
import BestLeather from './BestLeather';
import Latest from './Latest';
import Testimonial from './Testimonial';

export default function Content() {
    return (
        <div>
            <div className="pt-20 pl-24 pr-16">
                <Deals />
                <div className="mt-14">
                    <div className="justify-center text-center">
                        <h1 style={{color: "#34251F"}} className="lg:text-5xl text-3xl font-medium">Discover <span style={{color: "#D3A17E"}}>Latest Leather Fashion</span> <br/> New Arrivals</h1>
                        <p style={{color: "rgba(0, 0, 0, 0.7)"}} className="lg:pt-3 pt-4 font-normal text-lg">Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
                    </div>
                    <AddToCart />
                </div>
                <BestLeather />
                <div className="mt-10 pt-12">
                    <div className="justify-center text-center">
                        <h1 style={{color: "#34251F"}} className="lg:text-5xl text-3xl font-medium">Discover Top Selling <br/> <span style={{color: "#D3A17E"}}> Leather Jackets</span> </h1>
                        <p style={{color: "rgba(0, 0, 0, 0.7)"}} className="lg:pt-3 pt-4 font-normal text-base">Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
                    </div>
                    <AddToCart />
                </div>
                <Latest />
            </div>
            <div className="w-full pb-5">
                <Testimonial />
            </div>
        </div>
    )
}