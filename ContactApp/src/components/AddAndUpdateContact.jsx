import React from 'react'
import Modal from './Modal'
import {Field, Formik, Form, ErrorMessage} from 'formik'
import {addDoc, collection, doc, updateDoc} from 'firebase/firestore'
import {db} from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is required field'),
  email: Yup.string().email('invalid Email').required('Email is required field')
})

function AddAndUpdateContact({onClose, isOpen, isUpdate, contact}) {

 async function addContact(contact){
    try {
        const contactRef = collection(db, "contacts")
        await addDoc(contactRef, contact)
        onClose()
        toast.success("contact added succesfully")
    } catch (error) {
      console.log(error)
    }
  }

  async function updateContact(contact, id){
    try {
        const contactRef = doc(db, "contacts", id)
        await updateDoc(contactRef, contact)
        onClose()
        toast.success("contact Updated succesfully")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
        <Modal onClose={onClose} isOpen={isOpen} >
        <Formik 
        validationSchema={contactSchemaValidation}
        initialValues={isUpdate?
        {
          name: contact.name,
          email: contact.email
        }:
        {
          name: "",
          email: ""
        }}
        onSubmit={(values)=>{
          console.log(values)
          isUpdate ?
          updateContact(values, contact.id):
          addContact(values);
        }}>
          <Form className='flex flex-col  mt-[25px] gap-4'>
            <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name</label>
            <Field name="name" className="border rounded-lg h-10 p-2" />
            <div className=' text-red-600 font-bold text-sm'>
              <ErrorMessage name="name"/>
            </div>
            </div>
            <div className='flex flex-col gap-2 '>
            <label htmlFor='email'>Email</label>
            <Field name="email" type="email" className="border rounded-lg h-10 p-2"/>
            <div className=' text-red-600 font-bold text-sm'>
              <ErrorMessage name="email"/>
            </div>
            </div>

            <button className='bg-orange px-3 py-1.5 border self-end rounded-md text-black'>{isUpdate ? "Update" : "Add"} Contact</button>
          </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact