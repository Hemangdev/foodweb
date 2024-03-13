import React from 'react'

const Card = () => {
    return (
        <div className=' max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className=' rounded-xl relative '>
                <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                    <p className=' font-bold pt-4 text-2xl px-2'>Sun's Out BOGO Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 p-3 rounded-xl'>Order Now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            <div className=' rounded-xl relative '>
                <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                    <p className=' font-bold pt-4 text-2xl px-2'>New Restraunts</p>
                    <p className='px-2'>Added Daily</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 p-3 rounded-xl'>Order Now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            <div className=' rounded-xl relative '>
                <div className=' absolute bg-black/50 w-full h-full rounded-xl text-white'>
                    <p className=' font-bold pt-4 text-2xl px-2'>Italian Salad's</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className=' border-white bg-white text-black mx-2 absolute bottom-4 p-3 rounded-xl'>Order Now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default Card