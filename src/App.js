import React, { useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const Checkout = window.Checkout

  useEffect(() => {

    // const data = {
    //   apiOperation: 'CREATE_CHECKOUT_SESSION',
    //   interaction: {
    //     operation: 'PURCHASE'
    //   },
    //   order: {
    //     id: 'jxubiusssDIznx',
    //     amount: '100.00',
    //     currency: 'USD'
    //   }
    // }
    // axios.post('https://test-gateway.mastercard.com/api/rest/version/57/merchant/INVL33120005/session', data, {
    //   headers: {
    //     'Authorization': `Basic ${btoa(`merchant.INVL33120005:75f62627417ab8361decdc4a8d3601ec`)}`
    //   }
    // })
    //   .then(res => {
    //     if(res.data.session) {
          Checkout.configure({
            merchant: 'INVL33120005',
                order: {
                    amount: 50,
                    currency: 'NGN',
                    description: 'Triple tiered choc cake',
                    id: 'order134589'
                },
                interaction: {
                    operation: 'PURCHASE',
                    merchant: {
                        name: 'test',
                        address: {
                            line1: '1, test lane',
                            line2: 'Victoria Island'            
                        },
                        email  : 'support@test.com',
                        phone  : '+2348126837629'
                    },
                    locale        : 'en_US',
                    theme         : 'default',
                    displayControl: {
                        billingAddress  : 'OPTIONAL',
                        paymentConfirmation: 'SHOW',
                        orderSummary    : 'SHOW',
                        shipping        : 'HIDE'
                    }
                }
          // })
        // }
      })
  },[])
  const handleClick = () => {
    Checkout.showPaymentPage();
  }
  return (
    <div className="App">
      <button onClick={handleClick}>SHOW BOX</button>
    </div>
  );
}

export default App;
