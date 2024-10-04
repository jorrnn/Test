import React from 'react'

const Number = () => {
    const numList = [
        {num:'10M+', text:'Happy Customers'},
        {num:'1000+', text:'Patients Capacity'},
        {num:'150+', text:'Expert Doctors'},
        {num:'05+', text:'Years of Experiences'},
    ];

  return (
    <div className='number'>
        {numList.map((numb) =>(
            <div key={numb.num}>
                <div>
                    <h1>{numb.num}</h1>
                    <p>{numb.text}</p>
                </div>
            </div>
        )
        )}
    </div>
  )
}

export default Number