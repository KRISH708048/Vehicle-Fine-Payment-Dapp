 import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { abi, ContractAddress } from '../Utils/constants';
import { user } from '../Utils/user';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const PaymentPage = () => {
  const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false);
  const [transactionTime, setTransactionTime] = useState(null);

  const payFine = async () => {
    const contract = new web3.eth.Contract(abi, ContractAddress, {gas: 1000000, gasPrice: web3.utils.toWei('2', 'Gwei')});  
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAccount = accounts[0];
      const transaction = await contract.methods.payFine(user.fineType).send({ from: selectedAccount, value: web3.utils.toWei('0.0002', 'ether') });
      setIsTransactionSuccessful(true);
      setTransactionTime(new Date(transaction.timestamp * 1000).toLocaleString());
    } catch (err) {
      console.log('problem found', err);
    }
  };

  return (
    <div className='box'>
      <h1 className='paymentH'>PAYMENT</h1>
      {isTransactionSuccessful ? (
        <p className='paymentT'>Transaction successful!!<br /> Challan Cleared.</p>
      ) : (
        <Button className='pay-btn' onClick={payFine}>
          Pay the fine
        </Button>
      )}
    </div>
  );
};
export default PaymentPage;