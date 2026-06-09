import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/ui/navbar'
import { IconDashboard, IconPhone } from '@tabler/icons-react'
import React from 'react'

function page() {
    return (
        <div className='w-full md:max-w-7xl mx-auto p-2 py-10'>

            <h1 className='font-heading font-bold text-2xl capitalize text-center'>Complete Your Onboadring</h1>
            <p className='font-sans text-center text-muted-foreground'>Experience the smoothness we BMV offers!</p>
            <div className='md:w-[60%] mx-auto my-10'>
                <div className='flex flex-col gap-2'>
                    <h3 className='flex items-center gap-1 font-sans font-medium text-lg'><IconPhone />Phone Number</h3>
                    <Input type='number' placeholder='enter your phone' maxLength={10} minLength={10} />
                    <p className='text-sm font-light text-muted-foreground'>We collect your numbers just for the onboarding process and will not use it for any personal data leakage problems and will only share it with the venued where you have booked</p>
                </div>
                <div className='w-full flex justify-center'>
                <Button className='my-10 mx-auto'> <IconDashboard />  Complete Onboarding</Button>
                </div>

            </div>
        </div>
    )
}

export default page