import React from 'react'
import { createPortal } from 'react-dom'

function Modal({onClose, isOpen, children}) {
  return createPortal(
    <>
    {isOpen ? <div className=' grid place-items-center backdrop-blur z-40 h-screen w-screen absolute top-0'>
        <div className='w-[348px] h-auto bg-white relative z-50 mx-8'>
            <div className='absolute end-4  text-[25px] cursor-pointer'
            onClick={onClose}>X</div>
            <div className=' p-4'>
        {children}
            </div>
        </div>
        <div 
         />
    </div> : <></>}
    </>
 , document.getElementById("modal-root") )
}

export default Modal