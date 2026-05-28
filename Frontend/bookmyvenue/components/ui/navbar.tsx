'use client'
import Image from 'next/image'
import { IconSearch, IconLocationCheck, IconMenu2, IconColumnRemove, IconX } from '@tabler/icons-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useState } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between px-2 sm:px-3 py-2 max-w-7xl border border-border mx-auto w-full rounded-2xl sm:rounded-4xl shadow-xl'>
      <div className="flex items-center gap-1 sm:gap-2 flex-1 sm:w-[60%]">
        <Image src="/logo.png" alt="BookMyVenue Logo" width={40} height={40} className='mb-2 sm:w-[50px] sm:h-[50px]'/>
        <div className='w-[50%]'>
          <InputGroup className="w-full group">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <IconSearch />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <button 
        className="flex md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {
          mobileMenuOpen ? <IconX size={24} className='text-primary'/> : <IconMenu2 size={24} />
        }
      </button>

      <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} sm:flex sm:flex-row items-center sm:items-center gap-2 sm:gap-2 absolute sm:static top-25 left-0 right-0 p-3 sm:p-0 bg-background sm:bg-transparent border-b sm:border-b-0 border-border rounded-2xl w-[90%] mx-auto sm:w-auto`}>
        <div className='w-full sm:w-auto'>
          <InputGroup className="w-full sm:max-w-xs">
            <InputGroupInput placeholder="Connect Your Location..." />
            <InputGroupAddon>
              <IconLocationCheck className='text-destructive'/>
            </InputGroupAddon>
          </InputGroup>
        </div>

          <div className='flex items-center gap-1 w-full sm:w-auto '>
            <h3 className='text-sm sm:text-base'>username</h3>
            <div className='bg-destructive h-6 w-6 rounded-full shrink-0'></div>
          </div>
        
      </div>
    </div>
  )
}

export { Navbar }