// "use client";

// import * as React from "react";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import fram1 from "../../../public/Frame1.png";
// import fram2 from "../../../public/Frame2.png";
// import fram3 from "../../../public/Frame3.png";

// export default function CarouselSize() {
//   const images = [fram2, fram2, fram2, fram2];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="m-20 w-full max-w-4xl">
//       <Carousel>
//         <CarouselContent >
//           {images.map((image, index) => {
//             const isCenter = index === currentIndex;
//             const isLeft = index === (currentIndex - 1 + images.length) % images.length;
//             const isRight = index === (currentIndex + 1) % images.length;

//             const imageStyle = isCenter
//               ? "scale-100 blur-0"
//               : "scale-90 blur-sm";

//             return (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 <div className="p-1">
//                   <Card>
//                     <CardContent
//                       className={`flex aspect-square items-center justify-center p-6 transition-transform duration-500 ease-in-out ${imageStyle}`}
//                     >
//                       <Image src={image} alt={`Image ${index + 1}`} />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//         <CarouselPrevious onClick={handlePrevious} />
//         <CarouselNext onClick={handleNext} />
//       </Carousel>
//     </div>
//   );
// }



import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import image from "../../../public/image.png";
import image1 from "../../../public/image1.png"
import image2 from "../../../public/image2.png"

export default function Shop() {
  const images = [image, image1, image2, image];

  return (
    <Carousel
      className="ml-36 mt-10 w-full max-w-3xl"
    >
      <CarouselContent className="-ml-1">
        {images.map((fram, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex p-6">
                  <Image src={fram} alt={`Frame ${index + 1}`} className="max-w-xs" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
