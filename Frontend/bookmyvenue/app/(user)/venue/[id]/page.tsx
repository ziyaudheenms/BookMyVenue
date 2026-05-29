import { Card } from '@/components/ui/card'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'

function page() {
    return (
        <div className=''>
            <div className='w-full relative  h-96 flex items-center bg-[url(https://www.alsajconventioncenter.com/wp-content/uploads/2023/07/Arena.png)]  bg-cover bg-center bg-no-repeat rounded-3xl px-2'>
                <div>
                    <Card className="relative flex-none w-56 p-0 h-80 hidden md:inline-block" >
                        <img
                            src='https://www.alsajconventioncenter.com/wp-content/uploads/2023/07/Arena.png'
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-75 h-80"
                        />
                        <Badge className='absolute right-1 bottom-2 z-50'>Al Saj Convention Center</Badge>
                    </Card>
                </div>
                <Button className='absolute top-5 right-3 md:h-14 md:w-44 brightness-100 z-50'>Book Now</Button>
            </div>
        </div>
    )
}

export default page