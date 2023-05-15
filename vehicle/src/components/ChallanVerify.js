import React, { Component } from 'react';
import { user } from '../Utils/user';


export default class ChallanVerify extends Component {
    render(){
        return(
            <div className='box'>
               <h3 className='text'><strong>Name:</strong>{user.name}</h3>
                <ul className='pallign'>
                    <li> <p><strong>Age: </strong>{user.age}</p> </li>
                    <li> <p><strong>Fine Amount: </strong>{user.challanfine}</p> </li>
                    <li> <p><strong>Vehicle Number: </strong> {user.vehicle_number} </p></li>
                    <li> <p><strong>Place: </strong>{user.place}</p></li>
                </ul>               
                <img src = {user.image} width="32%" height="50%" className='imgpos'/>

            </div>
        )
    }
}
