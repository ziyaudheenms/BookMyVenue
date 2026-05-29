import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const CarousalData = [
    {
        id: 1,
        imgURl: "/1.png",
    },
    {
        id: 2,
        imgURl: "/2.png",
    },
    {
        id: 3,
        imgURl: "/3.png",
    },
]

function TopRatedVenues() {
  return (
    <Carousel className="max-w-7xl">
      <CarouselContent>
        {CarousalData.map((venue, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className='p-0'>
                <CardContent className="p-0">
                  <Image src={venue.imgURl} alt="Venue" width={200} height={200} className='w-full h-48 md:h-64 lg:h-80'/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export { TopRatedVenues }