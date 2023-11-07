
import './App.css'
import Navbar from './components/Navbar'
import {PiMagnifyingGlassBold} from 'react-icons/pi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import ContactCard from './components/ContactCard'
import Modal from './components/Modal'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact'


function App() {
  const [contacts, setContacts] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const onopen = ()=>{
    setIsOpen(true)
  }

  const onClose = ()=>{
    setIsOpen(false)
  }

  useEffect(()=>{
    const getContacts = async () =>{
      try {
        const contactRef = collection(db, "contacts")
        

        onSnapshot(contactRef, (snapshot)=>{
          const contactList = snapshot.docs.map((doc)=>{
            return{
              ...doc.data(),
              id: doc.id
            }
          })
          setContacts(contactList)
          return contactList
        })



        
      } catch (error) {
        console.log(error)
      }
    }

    getContacts();
  },[])

  const filterContacts = (e)=>{
    const value = e.target.value;
    const contactRef = collection(db, "contacts")
        

        onSnapshot(contactRef, (snapshot)=>{
          const contactList = snapshot.docs.map((doc)=>{
            return{
              ...doc.data(),
              id: doc.id
            }
          })
          const filteredContacts = contactList.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))
          
          setContacts(filteredContacts)
          return filteredContacts
        })
  }

  return (
    <>
      <Navbar />
      <div className='flex mt-4 relative items-center mx-4 gap-[10px]'>
        <PiMagnifyingGlassBold className=' text-white absolute w-[24px] h-[24px] ml-[5px]'/>
        <input 
        className='w-[295px] bg-transparent border-white border-[1px] h-[40px] rounded-[10px] pl-[30px] text-[16px] text-white'
        placeholder='Search Contact'
        onChange={filterContacts}
        />
        <div className='bg-white w-[52px] h-[52px] rounded-full flex justify-center items-center cursor-pointer'>
          <AiOutlinePlusCircle className='w-[52px] h-[52px]' onClick={onopen} />
        </div>
      </div>
      <div>
        {contacts.length <= 0 ? <NotFoundContact /> : contacts.map((contact)=>(

         <ContactCard contact={contact} key={contact.id}/>
          
        ))}
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} onopen={onopen} />

      <ToastContainer
      position='bottom-center' />
    </>
  )
}

export default App
