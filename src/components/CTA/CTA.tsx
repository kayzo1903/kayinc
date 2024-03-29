import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <section className='w-full relative bg-skin bg-ctaimage bg-contain min-h-[50vh] lg:bg-cover lg:bg-no-repeat lg:min-h-[37.8vh] text-white'>
         <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 flex flex-col items-center'>
              <h3 className='text-2xl sm:text-3xl text-center leading-relaxed capitalize font-semibold'>let Get to work</h3>
              <Link href={'/Contacts'} className='w-fit px-8 py-2 text-base rounded-xl bg-white text-gray-950 capitalize'>contacts us</Link>
         </div>
    </section>
  )
}

export default CallToAction