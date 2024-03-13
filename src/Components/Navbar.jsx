import React, { useState } from 'react' 

const Navbar = () => {
    const [navOpen,setOpenNav] = useState(false)

  return (
    <div className='max-w-[1240px] flex  justify-between items-center p-4 mx-auto '>
       <div className=' flex  items-center '>
       <div>
            <h1 className=' sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer mx-2' onClick={()=> setOpenNav(!navOpen)}><i className="fa-solid fa-bars"></i></h1>
        </div>
        <h1 className=' sm:text-2xl md:text-3xl lg:text-4xl mx-3'>
            Street<span className=' font-bold'>Eats</span>
        </h1>
        <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] mx-2'>
            <p className=' bg-black text-white  rounded-full p-2'>Delivery</p>
            <p className=' p-2'>Pickup</p>
        </div>
       </div>
       <div className=' bg-gray-200 rounded-full flex items-center lg:p-1 px-2  w-[200px] sm:w-[400px]  lg:w-[500px] md:px-2 '>
       <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
         <input type="text" placeholder='Search Foods' className=' outline-none w-full focus:outline-none lg:p-2 rounded-full  bg-transparent sm:py-1 px-2 lg:px-2 ' />
       </div>
       <button className=' bg-black text-white hidden md:flex items-center p-3 rounded-full'>
       <i className="fa-solid fa-cart-arrow-down mr-2"></i>
        Cart 
       </button>
       {/* Mobile Menu */}
       {/* Overlay toggle effect when button is clicked */}
       {navOpen ? <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }
       
       {/* Side drawer */}
       <div className={navOpen ? ' fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white' : ' fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white'}>
        <button onClick={() => setOpenNav(!navOpen)} className=' absolute top-4 right-4 cursor-pointer'><i class="fa-solid fa-x"></i></button>
        <h1 className=' text-2xl p-3'>Street <span className=' font-bold'>Eats</span></h1>
        <nav>
            <ul className=' flex flex-col p-4 text-gray-800 cursor-pointer'>
                <li className=' text-xl mr-2 flex py-4 items-center '><i className="fa-solid fa-truck-fast mr-2"></i> Orders</li>
                <li className=' text-xl mr-2 flex py-4 items-center'> <i class="fa-solid fa-heart mr-2"></i>Faviourites</li>
                <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-wallet mr-2"></i>Wallet</li>
                <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-question mr-2"></i>Help</li>
                <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-tag mr-2"></i>Promotions</li>
                <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-cloud-arrow-down mr-2"></i>Best Ones</li>
                <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-user-plus mr-2"></i>Invite Friends</li>
            </ul>
        </nav>
       </div>
    </div>
  )
}

export default Navbar