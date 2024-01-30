import React from 'react'
import garden from '../../../public/garden.jpg'
import Image from 'next/image'

const EnguiryForm = () => {
    return (
        <form className='py-8 w-full flex gap-4 items-center !h-fit bg-skin px-4'>
            <div className='hidden sm:block h-[480px] w-96 relative'>
                <Image
                    alt='garden'
                    src={garden}
                    priority
                    fill={true}
                    style={{ objectFit: "cover" }} />
            </div>
            <div className='h-[480px] max-w-[96] py-12 px-4 sm:px-32'>
                <div className='w-full'>
                    <div className='text-white capitalize'>
                        <h3 className='text-2xl font-semibold leading-relaxed'>General enguiries form</h3>
                        <h3 className='text-2xl font-semibold leading-relaxed'>fill out the form</h3>
                    </div>
                    <div className='mt-8 space-y-6 flex-col flex'>
                        <input type="text"
                            name="username"
                            id="username" placeholder='full name'
                            className='bg-transparent border-b-2 border-white placeholder:capitalize placeholder:text-white focus:outline-none text-white' />
                        <input type="Email"
                            name="useremail"
                            id="useremail" placeholder='Email address'
                            className='bg-transparent border-b-2 border-white placeholder:capitalize placeholder:text-white focus:outline-none text-white' />
                        <input type='tel'
                            name="usernumber"
                            id="userphonenumber" placeholder='phone number'
                            className='bg-transparent border-b-2 border-white placeholder:capitalize placeholder:text-white focus:outline-none text-white' />
                        <textarea
                            name="usermessage"
                            id="usermessage"
                            cols={10}
                            rows={2}
                            className='bg-transparent border-b-2 border-white placeholder:capitalize placeholder:text-white focus:outline-none text-white'
                            placeholder='message'></textarea>
                        <button type='submit' className='bg-white text-gray-950 rounded-xl py-2 font-medium'>
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EnguiryForm