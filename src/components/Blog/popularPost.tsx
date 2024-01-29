import React from 'react'
import PostCards from './PostCards'
import { DoubleChevronRight } from '../Icons/Icons'

const PopularPost = () => {
  return (
    <article className='w-full px-4 py-8 min-h-[50vh] space-y-8'>
        <h3 className='text-xl text-gray-800 dark:text-slate-300 leading-relaxed'>popular post</h3>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
        <PostCards />
        <PostCards />
        <PostCards />
      </div>
        <button className='text-skin flex flex-nowrap items-center gap-2 hover:dark:text-white hover:text-gray-950'>view more <span><DoubleChevronRight/></span></button>
    </article>
  )
}

export default PopularPost