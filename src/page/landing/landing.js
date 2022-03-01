import React from 'react';
import { Logo } from './logo.js';

export class Landing extends React.Component{
    render(){
        return( 
        <div>
            <Logo />
            <h1 className='title'>Northammer Games</h1>
            <p className='tagline'>Howabout some games there bud.</p>
        </div>              
        );
    }
}

