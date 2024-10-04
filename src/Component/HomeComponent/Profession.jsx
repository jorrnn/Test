import React from 'react'
import doctor from '../../assets/3.png'
import nurse from '../../assets/4.png'
import ambulance from '../../assets/7.png'
import people from '../../assets/8.png'


const Profession = () => {
    const profList = [
        {header:'All Professionals', text:'Providing unwavering support around the clock, our 24-hours service ensures.',
            img: doctor
        },
        {header:'Qualified Doctors', text:'A qualified doctors possesses a comprehensive understanding of medical sciences',
            img: nurse
        },
        {header:'Emercency Care', text:'Our timely intervention plays a crucial role in stabilizing patients and saving lives',
            img: ambulance
        },
        {header:'Happy Patients', text:'It is equipped with specialized tools and technology to ensure the patient’s safety',
            img: people 
        },
    ] 
  return (
    <div className='profession'>
        {profList.map((prof) =>(
            <div key={prof.header}>
                <div className='proff'>
                    <img src={prof.img}/>
                    <h1>{prof.header}</h1>
                    <p>{prof.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Profession