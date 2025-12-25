import React from 'react'

const btnStyles="border-[1.2px] border-slate-800 px-3 py-1 rounded";

const SetQuantity = ({
     quantity,
     cardCounter,
     handleQtyIncrease,
     handleQtyDecrease,
}) => {
  return (
    <div className='flex gap-8 items-center'>
     {cardCounter ? null: <div className='semi-bold'> QUANTITY</div>}
          <div className='flex md:flex-row flex-col items-center lg:text-[22px] text-sm gap-6'>
               <button disabled={quantity<=1}
                    className={btnStyles}
                    onClick={handleQtyDecrease}>
                         -
               </button>
               <div className='text-red-600 font-semibold'>
                    {quantity}
               </div>
               <button 
                    className={btnStyles}
                    onClick={handleQtyIncrease}>
                    +
               </button>
          </div>
    </div>
  )
}

export default SetQuantity