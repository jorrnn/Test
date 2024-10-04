import React from 'react'
import doct from '../../assets/9.png'
import group from '../../assets/Group.png'
import time from '../../assets/10.png'

const Appointed = () => {
  return (
    <div className='Ap1'>
        <div className='Ap2'>
            <div className='Ap'>
            <h1>Start Consultation</h1>
            <p>Consult with our professional Doctors</p>
            </div>
            <div className='Ap3'>
                <img src={doct}/>
                <div className='Ap4'>
                    <p>Heiler accepts major  <br />health care insurance plans and providers to <br />ensure you get quality care at a cost that fits <br />within your budgets. Also the onboarding <br />of experienced, well trained and certified <br />doctors are available to attend to all your needs.</p> <br /> 
                    <img src={time}/><br /> <br /> 
                    <a href="" class="hero-btnn red-btnn"><b>Book an Appointment</b></a>
                </div>
                
                <img src={group}/>
            </div>
        </div>
        
    </div>
    
  )
}

export default Appointed