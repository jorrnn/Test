import React from 'react'
import one from '../../assets/11.png'
import two from '../../assets/12.png'
import three from '../../assets/13.png'
import four from '../../assets/14.png'

const Testimonial = () => {
    const testimoniaList = [
        {header:'Brain luis', text:'“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription',
            img: one
        },
        {header:'Brain luis', text:'“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription',
            img: two
        },
        {header:'Brain luis', text:'“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription',
            img: three
        },
        {header:'Brain luis', text:'“Embrace wellness without breaking the banks! Enjoy a generous discount on each subscription',
            img: four

        },
    ];

  return (
    <div className='test1'>
        <div className='colorline'>
            <div className='testimonial'>
                <div className='orange'></div>
                <h1>Testimonials</h1>    
                <div className='orange'></div>
            </div>
            <p>What our Patient says about us</p>
        </div>
        

        <div className='test2'>
            {testimoniaList.map((test) =>(
            <div key={test.header}>
                <div className='test3'>
                    <img src={test.img}/>
                    <h2>{test.header}</h2>
                    <p>{test.text}</p>
                </div>

            </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonial