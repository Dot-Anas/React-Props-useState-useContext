import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

function TaskCard({name,id}) {
    const {votes,handleVote} =useContext(Context)

  return (
    <div className='p-2 border-2 border-blue-200 rounded-sm flex flex-row items-center justify-between hover:border-amber-200 hover:shadow-amber-200 hover:shadow-sm font-semibold transition-all duration-200 ease-in-out'>
        <p>{name}</p>
        <div className='flex items-center gap-2'>
            <button className='px-1 py-1 pr-3 border-2 border-blue-200 cursor-pointer hover:bg-blue-200 rounded-sm transition-all duration-200 ease-in-out' onClick={()=>handleVote(id)}>👍Vote</button>
            <p className='w-12 text-center '>{votes[id]}</p>
        </div>
    </div>
  )
}

export default TaskCard