import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function Pagination({handleForward, handlePre, pageNo}) {
  return (
    <>
      <div className='flex justify-center items-center text-white text-xl gap-4 p-3  bg-slate-900'>
      <FaArrowLeftLong onClick={handlePre} className='hover:cursor-pointer'/>
      <div>{pageNo}</div>
      <FaArrowRightLong onClick={handleForward} className='hover:cursor-pointer' />
      </div>
    </>
  )
}

export default Pagination
