//Main Imports
import React from 'react'
import './Services.scss'

//Hooks
import { useState } from 'react'
import ServiceFile from '../../components/ServiceFile'


const Services = () => {
  const [submitChange, setSubmitChange] = useState();

  const handleSubmit = () => {
    console.log('Order was submitted!')
  }
  
  return (
    <div className='service-folder'>
      <ServiceFile />
      <form className='service-form' onSubmit={handleSubmit(event)}>
        <div className='place-holder'>
          <input className='input-bar' placeholder=''></input>
          <input className='input-bar' placeholder=''></input>
        </div>
        <div className='place-holder'>
          <input className='input-bar' placeholder=''></input>
          <input className='input-bar' placeholder=''></input>
        </div>
        <div className='place-holder'>
          <input className='input-bar' placeholder=''></input>
          <input className='input-bar' placeholder=''></input>
        </div>
        <div className='place-holder'>
          <input className='input-bar' placeholder=''></input>
          <input className='input-bar' placeholder=''></input>
        </div>
        <div className='place-holder'>
          <input id='comment-bar' placeholder=''></input>
        </div>
        <button className='form-btn' type='submit'><h2>submit</h2></button>
      </form>
    </div>
  )
}

export default Services