import React from 'react'
import { BiLocationPlus, BiMailSend, BiPhone, BiPhoneCall } from 'react-icons/bi'

const OurAddress = () => {
    return (
        <article className='py-16 space-y-8 px-4'>
            <div className='capitalize'>
                <h3 className='text-2xl sm:text-3xl font-semibold leading-relaxed'>Keep in touch</h3>
                <h3 className='text-2xl sm:text-3xl font-semibold leading-relaxed'>Visit our office Today</h3>
            </div>
            <div className='flex gap-4 justify-center flex-wrap sm:justify-between'>
                <div className='w-80 flex gap-2 items-start shadow-md bg-slate-100 dark:bg-slate-800 py-4 px-4 rounded'>
                    <BiLocationPlus  className='text-skin h-12 w-12 '/>
                    <div className='space-y-2'>
                        <h6 className='text-xl'>Address</h6>
                        <p className='text-gray-500 dark:text-gray-300 capitalize text-sm'>Uhuru street <br /> Uhuru Tower floor-2  <br /> office 345</p>
                    </div>
                </div>
                <div className='w-80 flex gap-4 items-start shadow-md bg-slate-100 dark:bg-slate-800 py-4 px-4 rounded'>
                    <BiPhoneCall  className='text-skin h-12 w-12'/>
                    <div className='space-y-2'>
                        <h6 className='text-xl'>Disscuss</h6>
                        <p className='text-gray-500 dark:text-gray-300 capitalize text-sm'>For call Enguiry ? <br />call us on +255 111 111 111 </p>
                    </div>
                </div>
                <div className='w-80 flex gap-2 items-start shadow-md bg-slate-100 dark:bg-slate-800 py-4 px-4 rounded'>
                    <BiMailSend  className='text-skin h-12 w-12'/>
                    <div className='space-y-2'>
                        <h6 className='text-xl'>Disscuss</h6>
                        <p className='text-gray-500 dark:text-gray-300 text-sm'>For Email Enguiry ? <br /> info@kayzoInc.co.tz </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default OurAddress