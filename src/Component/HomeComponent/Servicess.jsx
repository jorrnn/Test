import React from 'react'
import treat from '../../assets/treat.png'
import bone from '../../assets/bone.png'
import brain from '../../assets/brain.png'
import heart from '../../assets/heart.png'

const Servicess = () => {
    const serviceList = [
        {header:'cardiology', text:'We are here to help you whenever you fall ill, and to keep you healthy',
            img: treat
        },
        {header:'neurology', text:'We can help you find vaccine appointment near you or notify you.',
            img: bone
        },
        {header:'orthopedic', text:'From sessional allergies to burn identification, we have the resources.',
            img: brain
        },
        {header:'surgeries', text:'We can help you find the available vaccine when the appointment is near',
            img: heart

        },
    ];

  return (
    <div className='servehead'>
        <div className='colorline'>
            <div className='testimonial'>
                <div className='orange'></div>
                <h1>Our Service</h1>    
                <div className='orange'></div>
            </div>
        <p>we provide the best service</p>
    </div>
        <div className='serve'>
            {serviceList.map((service) =>(
            <div key={service.header}>
                <div className='servee'>
                    <img src={service.img}/>
                    <h2>{service.header}</h2>
                    <p>{service.text}</p>
                </div>

            </div>
        ))}
        </div>
    </div>
  )
}
export default Servicess