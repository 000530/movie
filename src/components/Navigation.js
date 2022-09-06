import React from 'react';
import {Link} from 'react-router-dom'
import 'navigation.scss';

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
               <Link to='/'> <li>Home</li></Link>
               <Link to='/about'> <li>About</li></Link>
            </ul>
        </div>
    );
};

export default Navigation;