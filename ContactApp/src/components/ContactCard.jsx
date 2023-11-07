import { deleteDoc , doc} from "firebase/firestore";
import React, { useState } from "react";
import {BiUserCircle} from 'react-icons/bi'
import {FaRegEdit} from 'react-icons/fa'
import {ImBin} from 'react-icons/im'
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

export default function ContactCard({contact}){
  const [isOpen, setIsOpen] = useState(false)
  const onopen = ()=>{
    setIsOpen(true)
  }

  const onClose = ()=>{
    setIsOpen(false)
  }

  const deleteContact = async (id)=>{
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("contact deleted succesfully")
    } catch (error) {
      console.log(error)
    }
  }

    return(
      <>
    <div  className='bg-yellow w-[360px] ml-4 mt-4 flex items-center gap-[10px] px-[5px] py-[8px] rounded-[10px]'>
           
    <div className='flex gap-[5px]'>
    <BiUserCircle className='w-[48px] h-[48px] text-orange' />
    <div>
      <h2 className='text-[16px] font-semibold'>{contact.name}</h2>
      <p className='text-[14px]'>{contact.email}</p>
    </div>
    </div>
    <div className='flex ml-auto gap-[8px]'>
      <FaRegEdit  onClick={onopen} className='w-[32px] h-[32px] text-blue-700 cursor-pointer'/>
      <ImBin onClick={()=>deleteContact(contact.id)} className='w-[32px] h-[32px] text-red-500'/>
    </div>
   
  </div>
  <AddAndUpdateContact onClose={onClose} isOpen={isOpen} onopen={onopen} isUpdate contact={contact}/>
  </>
  )
}