import React , { useId } from 'react'

const Inputbox = ({label,className='',amount,
    onamountchange,oncurrencychange,currencyOptions=[]
    ,selectCurrency="usd",
    amountDisabled =false,
    currencyDisabled =false
    

}) => {

    const amountInputId= useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}` }>
      

      <div className='w-1/2'>
      
      <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
      {label}
      </label>
     <input 
     id={amountInputId}
      className='outline-none w-full bg-transparent py-1.5'
     type='number'
     value={amount}
     onChange={(e)=>onamountchange && onamountchange(e.target.value)}
     placeholder='Amount'
     disabled={amountDisabled}
     />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className='text-black/40 mb-2 w-full '> Currency Type</p>
     <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
       value={selectCurrency}
       onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
       disabled={currencyDisabled}
    >
        {currencyOptions.map((currency)=>(

            <option key={currency} value={currency}>
                {currency}
            </option>
        ))}
     </select>
      </div>
    </div>
  )
}

export default Inputbox
