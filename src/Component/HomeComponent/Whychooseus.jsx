import React from 'react'
import lady from '../../assets/18.png'
import arrow from '../../assets/17.png'
import vector from '../../assets/Vector.png'

const Whychooseus = () => {
  const whyChooseUs = [
    {text:'safety is our priority',
      img: vector
    },
    {text:'flexibility in treatment',
      img: vector
    },
    {text:'diagpnostic with technology',
      img: vector
    },
    {text:'realiable pricing',
      img: vector
    },
    {text:'professional staff',
      img: vector
    },


  ]
  return (
    <div className='why1'>
      <div className='why2'>
        <div>
          <h1>Why Choose Us</h1>
        </div>

        <div className='why3'>
          <img src={lady}/>

          <div className='why4'>
            {whyChooseUs.map((whyUs) =>(
              <div key={whyUs.text}>
                <div className='why5'>
                    <img src={whyUs.img}/>
                  <p>{whyUs.text}</p>
                </div>
              </div>
            ))}
            <br /><a href="" class="hero-btnnn red-btnnn"><b>Sign Up</b></a>
          </div>
          <img style={{
          }} src={arrow}/>
        </div>
      </div>
    </div>
  )
}

export default Whychooseus