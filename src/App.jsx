import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
import useCurrencyinfo from './hooks/useCurrencyinfo';

const App = () => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = useCurrencyinfo(from);
  const options = currencyinfo ? Object.keys(currencyinfo) : [];

  const swap = () => {
    const previousFrom = from;
    setFrom(to);
    setTo(previousFrom);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyinfo && currencyinfo[to]) {
      setConvertedAmount(amount * currencyinfo[to]);
    }
  };

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <Inputbox
                label='From'
                amount={amount}
                onamountchange={(value) => setAmount(value.replace(/^0+/, ''))} 
                currencyOptions={options}
                oncurrencychange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 bg-blue-600 text-white m-2 rounded-sm'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <Inputbox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                oncurrencychange={(currency) => setTo(currency)}
                amountDisabled
                selectCurrency={to}
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from?.toUpperCase() || ''} to {to?.toUpperCase() || ''}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
