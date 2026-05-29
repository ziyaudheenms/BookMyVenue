import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IconStar, IconStarFilled } from '@tabler/icons-react';

interface VenueListerProps {
    list: {
        id: number;
        image: string;
        name: string;
        rating: number;
        cats: string[];
    }[];
}


function VenueLister({ list }: VenueListerProps) {
    return (
        <div className=' h-fit overflow-x-scroll no-scrollbar flex items-center gap-3 my-4 '>
            {
                list.map((item) => {
                    return (
                        <div key={item.id}>
                        <Card className="relative flex-none w-56 p-0 h-80" key={item.id}>
                            <img
                                src={item.image}
                                alt="Event cover"
                                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 h-80"
                            />
                            
                        </Card>
                        <div className='py-2 px-2'>
                            <div className='flex items-center gap-2'>
                            <IconStarFilled className='text-primary' size={16}/>
                            <p className="text-sm text-primary">{item.rating}</p>

                            </div>
                            <h3 className="font-heading font-medium md:text-lg">{item.name}</h3>
                            <div className="flex flex-wrap gap-2 mt-2 w-50">
                                {item.cats.map((cat, index) => (
                                    <Badge key={index} variant="secondary">
                                        {cat}
                                    </Badge>
                                ))}
                            </div>
                        </div>  
                        </div>
                    )
                })
            }

        </div>
    )
}

export { VenueLister }