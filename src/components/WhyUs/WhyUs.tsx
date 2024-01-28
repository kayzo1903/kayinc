import React from 'react'
import { BiLike, BiSolidUserAccount, BiStar } from 'react-icons/bi'

const WhyUs = () => {
    return (
        <article className='w-full space-y-4 mt-16 px-4'>
            <div>
                <h3 className='text-2xl sm:text-3xl font-medium leading-relaxed'>Tommorow Agriculture</h3>
                <h3 className='text-2xl sm:text-3xl font-medium leading-relaxed'>Start Today</h3>
            </div>
            <div className='w-full flex flex-wrap gap-8 items-center justify-center sm:justify-start'>
                <div className='max-w-96 space-y-4'>
                    <BiStar  className='h-8 w-8 text-skin font-semibold'/>
                    <h6>Reliable and trustworthy</h6>
                    <div className='text-justify text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat dolor placeat et sint earum nesciunt similique.
                        Soluta cum inventore voluptas aliquam,
                        error eveniet ullam cumque deleniti magnam consequuntur rerum repellat.
                    </div>
                </div>
                <div className='max-w-96 space-y-4'>
                    <BiSolidUserAccount  className='h-8 w-8 text-skin font-semibold'/>
                    <h6>Proffesional and Experienced</h6>
                    <div className='text-justify text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat dolor placeat et sint earum nesciunt similique.
                        Soluta cum inventore voluptas aliquam,
                        error eveniet ullam cumque deleniti magnam consequuntur rerum repellat.
                    </div>
                </div>
                <div className='max-w-96 space-y-4'>
                    <BiLike  className='h-8 w-8 text-skin font-semibold'/>
                    <h6>Innovation and driven solution</h6>
                    <div className='text-justify text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat dolor placeat et sint earum nesciunt similique.
                        Soluta cum inventore voluptas aliquam,
                        error eveniet ullam cumque deleniti magnam consequuntur rerum repellat.
                    </div>
                </div>
            </div>
        </article>
    )
}

export default WhyUs