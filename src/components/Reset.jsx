import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
function Reset() {
    const {reset}=useContext(Context)
  return (
    <div className='bg-white p-3 rounded-sm shadow h-fit'>
        <button className='bg-sky-700 text-white px-2 py-1 rounded-sm cursor-pointer hover:bg-sky-600 transition-all duration-100 ease-in-out' onClick={reset}>Reset All Votes</button>
    </div> 
  )
}

export default Reset