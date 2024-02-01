//Main Imports
import React from 'react'
import './Services.scss'

//Hooks
import { useState } from 'react'

//Components
import DropDownNav from '../../components/DropDownNav'




const Services = () => {
  const [submitChange, setSubmitChange] = useState();

  const handleSubmit = () => {
    console.log('Order was submitted!')
  }
  
  return (
    <div className='service-folder'>
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