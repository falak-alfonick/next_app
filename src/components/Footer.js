import React from 'react'
import Image from 'next/image';
import logo from '../../public/Black.png'
import copy from '../../public/copy.png'
import money from '../../public/money.png'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaRegCopyright, 
    FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="pt-16 pl-24 pb-10">
            <div className="gap-7 inline-flex">
                <div className="w-64">
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
                <div className="grid grid-cols-6 divide-x divide-transparent ">
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
                    <div >
                        <h1 className="text-white font-medium">Faq</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Account</h4>
                            <h4 className="pb-1">Manage Deliveries</h4>
                            <h4 className="pb-1">Orders</h4>
                            <h4 className="pb-1">Payments</h4>
                        </div>
                    </div>
                    <div >
                        <h1 className="text-white font-medium">Resources</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">Free eBooks</h4>
                            <h4 className="pb-1">Development Tutorial</h4>
                            <h4 className="pb-1">How to Blog</h4>
                            <h4 className="pb-1">Youtube Playlist</h4>
                        </div>
                    </div>
                    <div >
                        <h1 className="text-white font-medium">Customer Care</h1>
                        <div className="text-slate-300 pt-3 text-sm">
                            <h4 className="pb-1">About us</h4>
                            <h4 className="pb-1">Contact us</h4>
                            <h4 className="pb-1">Blog</h4>
                            <h4 className="pb-1">Product Care</h4>
                        </div>
                    </div>
                    <div >
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
            <div className="pt-20 inline-flex gap-2 text-white">
                <Image src={copy} />
            </div>
            <div style={{position:"absolute", left:"800px"}} className="inline-flex pl-40 pt-14 gap-3">
                <Image src={money} />
            </div>
        </div>
    )
}
