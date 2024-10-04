import React from 'react'
import patient from '../../assets/29.png'
import scope from '../../assets/30.png'

const Blog = () => {
    const blogList = [
        {header:'These Tests Could Save Your Life When Test For Diseases', text:'When it comes to diseases, information about yourself can save your life',
            img: scope
        },
        {header:'These Tests Could Save Your Life When Test For Diseases', text:'When it comes to diseases, information about yourself can save your life',
            img: scope
        },
        {header:'These Tests Could Save Your Life When Test For Diseases', text:'When it comes to diseases, information about yourself can save your life',
            img: scope
        },
    ];
    
  return (
    <div className='header'>
        <h1>Blog & News</h1>
        <p>Our latest News and health article</p>
        {/* <div className='blog1'>
            <img src={patient}/>
        </div>
        <div className='blog2'>
            {blogList.map((vlog) =>(
                <div key={vlog.header}>
                    <div className='blog3'>
                        <img src={vlog.img}/>
                        <h2>{vlog.header}</h2>
                        <p>{vlog.text}</p>
                    </div>
                </div>
            ))}
        </div> */}
    </div>
  )
}

export default Blog