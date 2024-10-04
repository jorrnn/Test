import React from 'react'
import doc1 from '../../assets/19.png'
import doc2 from '../../assets/20.png'
import doc3 from '../../assets/21.png'
import doc4 from '../../assets/22.png'
import doc5 from '../../assets/23.png'

const Meetourprof = () => {
    const meetOurProf = [
        {header:'Dr Awoshika john', text:'Cardiologist', rating:'5.0(300+reviews)',
            img: doc1
        },
        {header:'Dr Awoshika john', text:'Cardiologist', rating:'5.0(300+reviews)',
            img: doc2
        },
        {header:'Dr Awoshika john', text:'Cardiologist', rating:'5.0(300+reviews)',
            img: doc3
        },
        {header:'Dr Awoshika john', text:'Cardiologist', rating:'5.0(300+reviews)',
            img: doc4
        },
    ];

  return (
    <div className='meet1'>
        <div className='colorline'>
            <div className='testimonial'>
                <div className='orange'></div>
                <h1>Meet Our Professioinal</h1>    
                <div className='orange'></div>
            </div>
        <p>wHere are some of our professionals to cater for your heath needs</p>
    </div>
        <div className='meet2'>
            {meetOurProf.map((meet) =>(
            <div key={meet.header}>
                <div className='meet3'>
                    <img src={meet.img}/>
                    <h2>{meet.header}</h2>
                    <p>{meet.text}</p>
                    <p>{meet.rating}</p>
                </div>

            </div>
        ))}
        </div>
    </div>
  )
}

export default Meetourprof