import React from 'react'

function HeadLineCards () {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Tasty salads</p>
                <p className='px-2'>also for Vegans</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/5116817/pexels-photo-5116817.jpeg" alt="veggie salad"></img>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Crispy chips</p>
                <p className='px-2'>classic Belgian</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chips"></img>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Who loves Pizza?</p>
                <p className='px-2'>can't belive you don't</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4' >Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[160px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="veggie salad"></img>
        </div>
    </div>
  )
}

export default HeadLineCards;
