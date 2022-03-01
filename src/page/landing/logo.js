import React from 'react';
import NorthammerLogo from './NorthammerLogo.png';
//import NorthammerLogoDark from './NorthammerLogoDark.png';

export class Logo extends React.Component{
    render(){

        return (
            <div>
                 <img className='app-logo' src={NorthammerLogo} alt='Northammer Logo' />
            </div>
        )
             
    }
}
