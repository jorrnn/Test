import React from 'react'
import lady from '../../assets/24.png'
import arrow from '../../assets/25.png'
import time from '../../assets/27.png'

const Consultation = () => {
  return (
    <div className='consult1'>
        <div className='consult2'>
            <div className='consult5'>
            <h1>Book an Appointed</h1>
            <p>make an appointment with doctor today</p>
            
            </div>
            <div className='consult3'>
                <img src={arrow}/>
                <div className='consult6'>
                    <p>Heiler accepts major  <br />health care insurance plans and providers to <br />ensure you get quality care at a cost that fits <br />within your budgets. Also the onboarding <br />of experienced, well trained and certified <br />doctors are available to attend to all your needs.</p> <br /> 
                    <img src={time}/><br /> <br /> 
                    <a href="" class="hero-btnn red-btnn"><b>Book an Appointment</b></a>
                </div>
                
                <img src={lady}/>
            </div>
        </div>
        
    </div>
  )
}

export default Consultation