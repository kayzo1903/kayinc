import React from 'react'

const CallToAction = () => {
  return (
    <section className='w-full relative bg-skin bg-ctaimage bg-cover bg-no-repeat min-h-[50vh] text-white'>
         <div className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 flex flex-col items-center'>
              <h3 className='text-2xl sm:text-3xl text-center leading-relaxed capitalize font-semibold'>Let's Get to work</h3>
              <button className='w-fit px-8 py-2 text-base rounded-xl bg-white text-gray-950'>contacts us</button>
         </div>
    </section>
  )
}

export default CallToAction