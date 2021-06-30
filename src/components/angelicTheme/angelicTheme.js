import React from 'react'
import './angelicTheme.css'
import {ReactComponent as Sun} from './angelicIcons/sun.svg';
import {ReactComponent as Cloud1} from './angelicIcons/cloud1.svg';
import {IoSunny} from 'react-icons/io';

function AngelicTheme() {
   return (
       <div className='dpShadow'>
           <IoSunny className='sun-logo'/>
           <Cloud1 className='cloud'/>
       </div>             
    )
}

export default AngelicTheme
