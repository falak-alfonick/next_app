import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalf, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegHeart } from "react-icons/fa";
import pic from "../../public/pic.png";

export default function AddToCart() {
    const products = [
        { id: 1, name: "Leather Jacket", price: "$120", rating: 4.5 },
        { id: 2, name: "Leather Jacket", price: "$120", rating: 4.5 },
        { id: 3, name: "Leather Jacket", price: "$120", rating: 4.5 },
        { id: 4, name: "Leather Jacket", price: "$120", rating: 4.5 },
    ];

    return (
        <div className="mt-10 px-4 md:px-24">
            <div className="text-center">
                <h1 className="text-3xl font-medium">Discover <span className='text-red-300'>Latest Leather Fashion</span> <br/> New Arrivals</h1>
                <p className="mt-2">Step Into The World Of David Moore. Where Leather Transcends Mere Fashion And Becomes A Symbol <br/> Step Into The World Of David Moore</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {products.map((product) => (
                    <div key={product.id} className="relative bg-white p-4 border border-gray-200 rounded-lg">
                        <FaRegHeart className="absolute top-2 right-2 text-gray-500 cursor-pointer" />
                        <Image src={pic} alt={product.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-medium">{product.name} <span className="text-orange-400 float-right">{product.price}</span></h3>
                        <p className="text-gray-600 mt-2">Leather Transcends Mere Fashion And Becomes A Symbol</p>
                        <div className="flex items-center mt-2">
                            <FaStar color="yellow" />
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStar color="yellow" /> 
                            <FaStarHalf color="yellow" />
                            <span className="ml-2">{product.rating}/5</span>
                        </div>
                        <button className="mt-4 w-full bg-stone-700 text-white py-2 rounded border border-stone-700 hover:bg-transparent hover:text-stone-700 transition">
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-6 space-x-4">
                <FaArrowAltCircleLeft className="text-gray-500 cursor-pointer" />
                <FaArrowAltCircleRight className="text-gray-500 cursor-pointer" />
            </div>
        </div>
    )
}
