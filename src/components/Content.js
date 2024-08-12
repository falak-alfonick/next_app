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
                <div className="mt-10">
                    <div className="justify-center text-center">
                        <h1 className="text-3xl font-medium">Discover <text className='text-red-300'>Latest Leather Fashion</text> <br/> New Arrivals</h1>
                        <p className="pt-2">Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
                    </div>
                    <AddToCart />
                </div>
                <BestLeather />
                <div className="mt-10 pt-12">
                    <div className="justify-center text-center">
                        <h1 className="text-3xl font-medium">Discover Top Selling <br/> <text className='text-red-300'>Leather Jackets</text> </h1>
                        <p className="pt-2">Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol Step <br/> Into The World Of David Moore</p>
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
