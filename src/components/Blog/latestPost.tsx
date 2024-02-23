import React from 'react'
import PostCards from './PostCards'
import { LoadPost } from '@/contentful/contentful'


const LatestPost = async () => {
  const data = await LoadPost()
  
  return (
    <article className='w-full px-4 py-8 min-h-[50vh] space-y-8'>
      <h3 className='text-xl text-gray-800 dark:text-slate-300 leading-relaxed text-right'> Article </h3>
      <div className='w-full'>
        {
          data ?
            <div className='flex flex-wrap gap-4 justify-center items-center'>
              {
                data.map((item: any ) => {
                 return (
                   <PostCards Post={item.fields} key={item.fields.time}/> )
                })
              }
            </div> :
            <div className='w-full text-center h-60'>
              <h6 className='text-xl font-semibold'>Opps something went wrong !<br /> check your internet connection</h6>
            </div>
        }
      </div>
      <button className='text-skin flex flex-nowrap items-center gap-2 hover:dark:text-white hover:text-gray-950 text-sm'>view more</button>
    </article>
  )
}



export default LatestPost
