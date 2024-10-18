import { useEffect,useState } from "react";

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
// https://v6.exchangerate-api.com/v6/792f0473867cb9a2ac28c711/latest/${currency}`
function useCurrencyinfo(currency){
  const [data,setData] =useState({})
  
    useEffect(()=>{

fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

).then((res)=>res.json())
.then(
  (res)=>setData(res[currency]))

  console.log(data)
  },[currency])

console.log(data)

return data
}

// Ensure the export is correct
export default useCurrencyinfo
