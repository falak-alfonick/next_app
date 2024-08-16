import React from 'react'
import Image from 'next/image';
import logo from '../../public/Black.png'
import copy from '../../public/copy.png'
import money from '../../public/money.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="pt-16 px-4 md:px-24 pb-10">
            <div className="flex flex-col lg:flex-row gap-7 lg:gap-28">
                <div className="lg:w-64">
                    <Image src={logo} style={{width:"180px", height:"25px"}}/>
                    <h4 className="text-slate-300 text-sm pt-4">We have clothes that suits your style and which you're proud to wear. From women to men.</h4>
                    <div className="inline-flex gap-1 pt-10">
                        <button className='mx-2 flex items-center justify-center' style={{ width: 27, height: 27, borderRadius: 25, backgroundColor: "#FFFFFF",}}>
                            <FaTwitter size={13} color='#C49C7C' />
                        </button>
                        <button className='mx-2 flex items-center justify-center' style={{ width: 27, height: 27, borderRadius: 25, backgroundColor: "#FFFFFF",}}>
                            <FaFacebookF size={13} color='#C49C7C' />
                        </button>
                        <button className='mx-2 flex items-center justify-center' style={{ width: 27, height: 27, borderRadius: 25, backgroundColor: "#FFFFFF",}}>
                            <FaInstagram size={13} color='#C49C7C' />
                        </button>
                        <button className='mx-2 flex items-center justify-center' style={{ width: 27, height: 27, borderRadius: 25, backgroundColor: "#FFFFFF",}}>
                            <FaGithub size={13} color='#C49C7C' />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap:6 lg:gap-8 divide-x divide-transparent w-full">
                    <div className="pl-6">
                        <h1 className="text-white font-medium">Company</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">About</h4>
                            <h4 className="pb-1">Features</h4>
                            <h4 className="pb-1">Works</h4>
                            <h4 className="pb-1">Career</h4>
                        </div>
                    </div>
                    <div >
                        <h1 className="text-white font-medium">Help</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Customer Support</h4>
                            <h4 className="pb-1">Delivery Details</h4>
                            <h4 className="pb-1">Terms & Conditions</h4>
                            <h4 className="pb-1">Privacy Policy</h4>
                        </div>
                    </div>
                    <div className="lg:ml-0 md:ml-0 ml-5 mt-5 lg:mt-0 md:mt-0">
                        <h1 className="text-white font-medium">Faq</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Account</h4>
                            <h4 className="pb-1">Manage Deliveries</h4>
                            <h4 className="pb-1">Orders</h4>
                            <h4 className="pb-1">Payments</h4>
                        </div>
                    </div>
                    <div className="md:ml-5 lg:ml-0 mt-5 lg:mt-0">
                        <h1 className="text-white font-medium">Resources</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Free eBooks</h4>
                            <h4 className="pb-1">Development Tutorial</h4>
                            <h4 className="pb-1">How to Blog</h4>
                            <h4 className="pb-1">Youtube Playlist</h4>
                        </div>
                    </div>
                    <div className="lg:ml-0 md:ml-0 ml-5 mt-5 lg:mt-0">
                        <h1 className="text-white font-medium">Customer Care</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">About us</h4>
                            <h4 className="pb-1">Contact us</h4>
                            <h4 className="pb-1">Blog</h4>
                            <h4 className="pb-1">Product Care</h4>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <h1 className="text-white font-medium">Information</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Privacy Policy</h4>
                            <h4 className="pb-1">Shipping Policy</h4>
                            <h4 className="pb-1">Return/Exchange Policy</h4>
                            <h4 className="pb-1">Size Guide</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 lg:pt-24 pt-16 lg:gap-40">
                <h1 className="text-white font-medium">Peter Sign © 2000-2023, All Rights Reserved</h1>
                <Image src={money} className="lg:ml-64" />
            </div>
        </div>
    )
}
