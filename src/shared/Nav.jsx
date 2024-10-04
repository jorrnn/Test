import React from 'react'
import { Link } from 'react-router-dom';
import logoimg from '../assets/1.png'

const Nav = () => {
    const navList = [
        {name:'Home', path:'/'},
        {name:'Service', path:'/Service'},
        {name:'Doctor', path:'/Doctor'},
        {name:'Contact', path:'/Contact'},
    ];

  return (

    <div style={{
        display:'flex'
    }}>
        <img src={logoimg} style={{
            width:'10vw',
        }}/>

        <nav className='mainnav' style={{
            display:"flex",
            width:'100vw',
            justifyContent:'center',
            textDecoration:"none"
            
        }}>
            {navList.map((navList, index) =>(
                <ul key={index} style={{
                    listStyle:"none",
                    padding: '2% 2%',
                    
                }}>
                    <Link className='Link'
                     to={navList.path}c>
                        <li style={{color:'green' 
                        }}>{navList.name}</li>
                    </Link>
                </ul>
            ))}
        </nav>
        <div>
            <a href="" class="hero-btnnnn red-btnnnn"><b>Get Started</b></a>
        </div>
    </div>
  )
}

export default Nav