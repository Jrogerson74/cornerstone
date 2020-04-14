import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='header__eighties'>1980</div>
                <div className='header__nineties'>1990</div>
                <div className='header__twoThousands'>2000</div>
                <div className='header__twentyTens'>2010</div>
            </div>
        )
    }      
}

export default Navbar;