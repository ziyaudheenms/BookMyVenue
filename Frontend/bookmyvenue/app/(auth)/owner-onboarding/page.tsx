import { Input } from '@/components/ui/input'
import { IconBriefcase, IconBuilding, IconHeart, IconSpeakerphone } from '@tabler/icons-react'
import React from 'react'

function page() {
  return (
    <>
      <div className='p-5 flex justify-center items-center mx-auto gap-6 '>
        <div className='md:w-[50%] h-screen flex flex-col justify-center items-center '>
          <h1 className='font-sans text-4xl font-bold text-center'>Become An Owner</h1>
          <h2 className='text-neutral-400 text-sans'>Get Your Venues Listed , Start Earning As a Owner</h2>
          <div className=' flex flex-col gap-4 mt-3 p-2 w-full md:w-[70%] '>
                <div className='flex flex-col gap-2'>
                    <h3 className='flex items-center gap-1 font-sans font-medium text-lg'><IconBuilding />Name Of The Organization</h3>
                    <Input  placeholder='Enter Your Company Name' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='flex items-center gap-1 font-sans font-medium text-lg'><IconBriefcase />Your Profession</h3>
                    <Input  placeholder='Enter Your Profession' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='flex items-center gap-1 font-sans font-medium text-lg'><IconHeart />Your Guarenty For Guests</h3>
                    <Input  placeholder='Tell What you promise them' />
                    <p className='text-sm font-light text-muted-foreground'>Lets guests find it secure , express what your organization can do for them and will ensure them</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='flex items-center gap-1 font-sans font-medium text-lg'><IconSpeakerphone />Share Who You Are</h3>
                    <textarea  placeholder='Tell What you promise them' className='border border-border rounded-lg p-2'/>
                    <p className='text-sm font-light text-muted-foreground'>Share about yourself , let it gain guests for your venues</p>
                </div>
          </div>
          
        </div>
        <div className='hidden md:w-[50%] md:block bg-teal-200 h-screen'>
          je
        </div>
      </div>
    </>
  )
}

export default page