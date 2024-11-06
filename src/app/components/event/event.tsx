"use state"
import { useState } from "react"
type QuoteType ={
    target:{
        quote:string,
    id:number
}
}
export default function QuoteOnChange(){
    const [quote,setQuote] = useState<string>("");
    const [quoteid,setQuoteId] = useState<number>(0);
    let Quote :QuoteType[];
    console.log(setQuote,setQuoteId)

    return(
        <>
        <input
        
         onChange={(event)=>setQuote(event.target.value)}
      className="w-[60%] p-2 text-xl border-b outline-none focus:border-2 rounded focus:border-purple-800"
      placeholder="Today's quote"
      type="text" 
      required/>
      <input 
      
      onChange={(event)=>setQuoteId(Number(event.target.value))}
      
      className="w-[20%] p-2 text-xl border-b outline-none focus:border-2 rounded focus:border-purple-800"
      placeholder={"Quote id"}
      type="number" 
      required/>
      </>
      
    )
}
// export function Event