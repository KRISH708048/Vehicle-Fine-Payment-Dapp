import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ChallanVerify from "./components/ChallanVerify";
import ContactPage from "./components/ContactPage";
import PaymentPage from "./components/PaymentPage";
import HomePage from "./components/HomePage";
import IssueFine from "./components/IssueFine";
import { Routes, Route } from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState('');
  
  const connectMetamask = async () => {
    try {
      
      if (typeof window.ethereum !== 'undefined') {
       
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const selectedAccount = accounts[0];
        
        setLoggedIn(true);
        setAccount(selectedAccount);
        console.log(`Logged in with account: ${selectedAccount}`);
      } else {
        throw new Error('Metamask not detected. Please install Metamask and try again.');
      }
    } catch (error) {
      console.error(error);
    }
  }
  


  return (
 
  <>
    <div className="App">
      <header className="App-header">
        <h2 className='V'><strong>Vehicle Challan Payment dApp</strong></h2>
        <nav className="navbar navbar-expand-lg">
          
          <div className="container-fluid">
             <a className="navbar-brand" href="/">
                    <img src="data:image/png;base64,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" alt="Bootstrap" width="30" height="45"/>

             </a>
             
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"      aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav justify-content-end">
                <li className="nav justify-content-end" id="name">
                    {!loggedIn ?
                    <Button onClick={connectMetamask} className='connect-metamask-btn'>Connect Metamask
                    </Button>
                      :
                    <div>
                      <p className='connect-metamask-btn1'>{account.slice(0, 11)}...</p>
                    </div>
                  }  
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/HomePage"}className="nav-link active" aria-current="page"><strong>Home</strong></Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/ChallanVerify"}className="nav-link"><strong>ChallanStatus</strong></Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/PaymentPage" }className="nav-link"><strong>Payment</strong></Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/IssueFine" }className="nav-link"><strong>IssueFine</strong></Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/ContactPage"} className="nav-link"><strong>Contact</strong></Link>
                  </li>


                </ul>
              </div>
          </div>
        </nav>
      </header>
    </div> 
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ChallanVerify" element={<ChallanVerify />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/IssueFine" element={<IssueFine />} />
        </Routes>
      </div>
      <footer className="footer">
        <p className='fully'>Vehicle Challan Payment dApp &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default App;
