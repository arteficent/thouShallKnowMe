import React from 'react'
import './angelicTheme.css'
import { ReactComponent as Sun } from './angelicIcons/sun.svg';
import { ReactComponent as Cloud1 } from './angelicIcons/cloud1.svg';

function AngelicTheme() {

    return (
        <div className='dpShadow'>
            <Sun className='sun-logo' />
            {/* <Cloud1 className='cloud' /> */}
        </div>
    )
}

export default AngelicTheme
