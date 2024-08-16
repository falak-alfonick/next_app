"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function CarouselDApiDemo() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="m-20 w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} >
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}



// import React from 'react'
// import Image from 'next/image';
// import fram1 from '../../../public/Frame1.png'
// import fram2 from '../../../public/Frame2.png'
// import fram3 from '../../../public/Frame3.png'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "../../components/ui/carousel"

// export default function AddToCart() {
//     const pics = [fram1, fram2, fram3, fram2]
//     return (
//         <div className="flex flex-col lg:flex-row lg:pt-12 pt-6 gap-3 lg:gap-1">
//             {/* <div>
//                 <Image src={fram1} width={340}/>
//             </div> */}
//             <div>
//                 <Carousel opts={{ align: "start" }} className="w-full max-w-8xl">
//                     <CarouselContent>
//                         {pics.map((pic, index) => (
//                             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                                 <div className="p-1">
//                                     <Image src={pic} width={700} layout="responsive" className="pl-4 pr-4"/>
//                                 </div>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <div className="flex place-items-center justify-center mb-14">
//                         <CarouselPrevious className="mt-36 left-24 lg:left-96 lg:ml-48 md:ml-80"/>
//                         <CarouselNext className="mt-36 right-44 lg:right-80 lg:mr-72 md:mr-40" />
//                     </div>
//                 </Carousel>
//             </div>
//             {/* <div>
//                 <Image src={fram3} width={340} />
//             </div> */}
//         </div>
//     )
// }