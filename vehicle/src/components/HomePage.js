import React, { Component } from 'react';

export default class HomePage extends Component {
    render(){
        return(
            <div>
                <div className='guide1 box1'>
                    <h3>STEP1</h3> 
                     <br />
                    <p>Go to Issue Fine for generating fine as an CHALLAN OFFICER</p>
                </div>
                <div className='guide2 box1'>
                <h3>STEP2</h3>
                <br />
                    <p>challan generated see on challan status </p>
                </div>
                <div className='guide3 box1'>
                <h3>STEP3</h3>
                <br />
                    <p>Now pay the fine as an Defaulter</p>
                </div>
                <div className='guide4 box1'>
                <h3>STEP4</h3>
                <br />
                    <p>Succesfully free from fine </p>
                </div>
            </div>
        )
    }
}
