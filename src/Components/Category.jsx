import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
     <div className=' max-w-[1240px] px-4 py-12 m-auto'>
        <h1 className='text-4xl text-orange-600 text-center font-bold'>Top Rated Menu Items</h1>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {
                categories.map((item,index) => (
                    <div key={item.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' >
                        <h2 className=' font-bold sm:text-xl'>{item.name}</h2>
                        <img src={item.image} alt="" className='w-20' />
                    </div>
                ))
            }
        </div>
     </div>
  )
}

export default Category