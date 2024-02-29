import React from 'react'

  const ServiceDates = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();  

  return (
    <div className='service-date'>
    <div className='service-date__month'>{month}</div>
    <div className='service-date__year'>{year}</div>
    <div className='service-date__day'>{day}</div>
  </div>
  )
}

export default ServiceDates