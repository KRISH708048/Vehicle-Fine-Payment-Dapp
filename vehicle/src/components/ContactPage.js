import React, { Component } from 'react';

export default class ContactPage extends Component {
    render(){
        return(
            <div className='box1'>
                <img src='HTTPS://parivahan.gov.in/parivahan/sites/default/files/img/icon-mail-circle.png' className='posi'/>
                <p className='pal'>Write to Us:
                    For any query regarding this website, please contact the Web Information Manager:-<br /><br />
                    <span>Name: eChallan Team</span><br /><br />
                   <span>Email: helpdesk-echallan@gov.in</span><br /><br />
                    <span>Phone: 0120-4925505 (Timings: 6:00 AM - 10:00 PM)</span>
                </p>
            </div>
        )
    }
}