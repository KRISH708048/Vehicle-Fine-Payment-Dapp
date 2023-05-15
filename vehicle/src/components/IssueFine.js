import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { abi, ContractAddress } from '../Utils/constants';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const IssueFine = () => {
 const [fineAmount, setFineAmount] = useState('');
  const [fineType, setFineType] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const issueFine = async () => {
    const contract = new web3.eth.Contract(abi, ContractAddress, {gas: 1000000, gasPrice: web3.utils.toWei('2', 'Gwei')});  
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAccount = accounts[0];
      await contract.methods.issueFine( web3.utils.toWei(fineAmount, 'ether') , fineType ).send({ from: selectedAccount });
     setFineAmount('');
      setFineType('');
     setVehicleNumber('');
    } catch (err) {
      console.log('problem found', err);
    }
  };

  return (
    <div className='box4 issue-fine-container'>
      <h1>Issue Fine</h1> <br />
      <Form>
        <Form.Group controlId='formFineAmount'>
          <Form.Label>Fine Amount (ETH)</Form.Label>
          <Form.Control as='select' value={fineAmount} onChange={(e) => setFineAmount(e.target.value)}>
          <option value=''>Select Fine Type</option>
            <option value='0.002'>0.002 ethers</option>
          </Form.Control>
         
        </Form.Group> <br />
        <Form.Control
            type="text"
            placeholder="Enter vehicle number"
            value={vehicleNumber}
            onChange={(event) => setVehicleNumber(event.target.value)}
            required
          />
        <Form.Group controlId='formFineType'>
          <Form.Label>Fine Type</Form.Label>
          <Form.Control as='select' value={fineType} onChange={(e) => setFineType(e.target.value)}>
            <option value=''>Select Fine Type</option>
            <option value='overspeeding'>Over Speeding</option>
            <option value='redlight'>Red Light</option>
            <option value='noBelt'>No Seat Belt</option>
            <option value='drink_and_drive'>Drink and Drive</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Button className='submit-btn' onClick={issueFine}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default IssueFine;



