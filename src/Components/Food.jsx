import React, { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
    const [food, setFood] = useState(data);
    const [originalFood] = useState(data); // Store original unfiltered data

    // Filter Function for filtering the category burger/pizza/salad etc.
    const filterFunc = (category) => {
        if (category === 'all') {
            setFood(originalFood); // Reset to original unfiltered data
        } else {
            setFood(originalFood.filter((item) => item.category === category));
        }
    };

    const priceFilter = (price) => {
        if (price === 'all') {
            setFood(originalFood); // Reset to original unfiltered data
        } else {
            setFood(originalFood.filter((item) => item.price === price));
        }
    };

    return (
        <div className='max-w-[1240px] py-12 m-auto px-4'>
            <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu</h1>
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => filterFunc('all')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>All</button>
                        <button onClick={() => filterFunc('burger')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>Burger</button>
                        <button onClick={() => filterFunc('pizza')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>Pizza</button>
                        <button onClick={() => filterFunc('salad')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>Salad</button>
                        <button onClick={() => filterFunc('chicken')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>Chicken</button>
                    </div>
                </div>
                {/* Filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => priceFilter('all')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>All</button>
                        <button onClick={() => priceFilter('$')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>$</button>
                        <button onClick={() => priceFilter('$$')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>$$</button>
                        <button onClick={() => priceFilter('$$$')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>$$$</button>
                        <button onClick={() => priceFilter('$$$$')} className='border-orange-600 text-orange-600 m-1 hover:text-white hover:bg-orange-500'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item) => (
                    <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p><span className='text-white p-2 rounded-xl bg-orange-600'>{item.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
