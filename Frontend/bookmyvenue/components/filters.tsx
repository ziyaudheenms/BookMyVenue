import React from 'react'
import { IconCake , IconBuildingSkyscraper ,IconBuildingBank , IconBuildingArch , IconCoffee, IconBeach , IconArmchair2  , IconBuilding  } from '@tabler/icons-react';

function Filters() {
  return (
    <div className='w-full overflow-x-scroll flex items-center gap-3 font-sans text-sm md:text-md lg:text-lg font-medium text-foreground px-2 no-scrollbar'>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconCake className='inline-block mr-2 md:hidden'/>
            Birthday
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconBuildingSkyscraper className='inline-block mr-2 md:hidden' />
            Hotels
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconBuildingBank className='inline-block mr-2 md:hidden' />
            Auditoriums
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconBuildingArch className='inline-block mr-2 md:hidden' />
            Malls
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconCoffee className='inline-block mr-2 md:hidden' />
            Cafes
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconBeach className='inline-block mr-2 md:hidden' />
            Resorts
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconArmchair2 className='inline-block mr-2 md:hidden' />
            <div>
            Meetup <span className='hidden md:inline'>Spaces</span>

            </div>
        </div>
        <div className='cursor-pointer hover:text-foreground/70 transition-colors duration-300 flex flex-col items-center'>
            <IconBuilding className='inline-block mr-2 md:hidden' />
            <div>
                Venue <span className='hidden md:inline'>Halls</span>
            </div>
            
        </div>

    </div>
  )
}

export { Filters }