 import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Food from './Components/Food'
import Category from './Components/Category'
import Footer from './Components/Footer'
 
 const App = () => {
   return (
     <div className=''>
      <Navbar/>
      <Hero />
      <Card />
      <Food />
      <Category />
      <Footer />
     </div>
   )
 }
 
 export default App