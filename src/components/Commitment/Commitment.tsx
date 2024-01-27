import React from 'react'
import { Technology, Trophy, Truck } from '../Icons/Icons'

const Commitment = () => {
    return (
        <section className='w-full px-4 bg-skin text-white space-y-4 min-h-fit py-8'>
            <h3 className='text-2xl font-semibold sm:text-3xl'>How we commit to the <br /> culture of sustainability</h3>
            <article className='w-full flex flex-wrap justify-center gap-4 py-4 md:justify-start'>
                <div className='space-y-4 max-w-80'>
                    <Technology />
                    <h6 className='text-base font-medium'>Technology</h6>
                    <p className='text-xs text-justify' >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam nemo nisi nesciunt facere quaerat esse numquam
                        nostrum dolorum quibusdam! Ratione hic incidunt optio vel
                        mollitia eligendi nulla modi temporibus qui?
                    </p>
                </div>
                <div className='space-y-4 max-w-80'>
                    <Trophy />
                    <h6 className='text-base font-medium'>Achivement</h6>
                    <p className='text-xs text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam nemo nisi nesciunt facere quaerat esse numquam
                        nostrum dolorum quibusdam! Ratione hic incidunt optio vel
                        mollitia eligendi nulla modi temporibus qui?
                    </p>
                </div>
                <div className='space-y-4 max-w-80'>
                    <Truck />
                    <h6 className='text-base font-medium'>Transport</h6>
                    <p className='text-xs text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam nemo nisi nesciunt facere quaerat esse numquam
                        nostrum dolorum quibusdam! Ratione hic incidunt optio vel
                        mollitia eligendi nulla modi temporibus qui?
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Commitment