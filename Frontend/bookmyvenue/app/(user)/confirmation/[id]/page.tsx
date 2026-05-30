
import { PaymentPDF } from '@/components/PaymentPDF'
import React from 'react'

function page() {
  return (
    <div className='w-full max-w-7xl mx-auto px-2 '>
        <h1 className='text-3xl font-heading font-bold text-center'>Booking Confirmation Document</h1>
        <PaymentPDF />
    </div>
  )
}


export default page