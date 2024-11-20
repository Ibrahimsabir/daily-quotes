"use client"
import { useState } from "react";

export default function Home() {
  
  const [quote,setQuote]=useState([{id:100,quote:"Your heart is the size of an ocean. Go find yourself in its hidden depths.",author:"Rumi"},
            {id:101,quote:"The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",author:"Abdul Kalam"},
          {id:102,quote:"It is bad for a young man to sin; but it is worse for an old man to sin.",author:"Abu Bakar Siddique (R.A)"},
          {id:108,quote:"It is not the strongest of the species that survive, but the most intelligent.",author:"Rumi"},
    {id:109,quote:"The most dangerous phrase in the language is 'I cannot change the world.'",author:"Filza Khan"},
    {id:110,quote:"The greatest reward is not the possession of wealth, but the possession of knowledge.",author:"Saleha Khan"}
  ])

  const [quoteid,setQuoteId] = useState(0)
  const [quoteval,setQuoteVal] = useState("")
  const [authorval,setAuthorVal] = useState("")
   
  const AddQuote = () => {
    // Find the index of the existing quote by id
    const quoteIndex = quote.findIndex((item) => item.id === quoteid);
  
    if (quoteIndex !== -1) {
      // Update the quote at the specific index
      const updatedQuotes = [...quote];
      updatedQuotes[quoteIndex] = { id: quoteid, quote: quoteval, author: authorval };
      setQuote(updatedQuotes);
    } else {
      // Add a new quote if it doesn't exist
      setQuote([...quote, { id: quoteid, quote: quoteval, author: authorval }]);
    }
  
    // Clear the inputs
    setQuoteVal("");
    setAuthorVal("");
    setQuoteId(0);
  };
  
   const EditQuote=(id:number)=>{
    const QuoteObj:any= quote.find(item=>item.id === id)
    setQuoteVal(QuoteObj.quote)
    setAuthorVal(QuoteObj.author)
    setQuoteId(QuoteObj.id)
   }

   const DeleteQuote = (id:any) => {
    // Filter out the quote with the matching id
    const updatedQuotes = quote.filter((item) => item.id !== id);
    setQuote(updatedQuotes);
  };
  
  return (
   
   <div className="max-w-4xl p-4 border-2 border-purple-200 rounded-lg mx-auto">
    <h1 className=" bg-purple-800 text-white text-[40px] font-semibold underline text-center mt-5">
      Daily Quotes
    </h1>
    <div className="grid grid-cols-1 gap-4 mt-8">
    <input 
      type="number"
      value={quoteid}
      onChange={(e:any)=>setQuoteId(e.target.value)}
      className="w-[20%] p-2 mx-auto text-xl border outline-none focus:border-2 rounded focus:border-purple-800"
      placeholder="Enter Quote Id" 
      required/>
      <textarea
      
      value={quoteval}
      rows={5}
      onChange={(e:any)=>setQuoteVal(e.target.value)}
      className="w-full p-2 text-xl border outline-none focus:border-2 rounded focus:border-purple-800"
      placeholder="Today's quote"
      
      required/>
      <input 
      type="text"
      value={authorval}
      onChange={(e)=>setAuthorVal(e.target.value)}
      className="w-fit p-2 mx-auto  text-xl border outline-none focus:border-2 rounded focus:border-purple-800"
      placeholder="Author's name"
       
      required/>
      <button 
      onClick={AddQuote}
      className="mx-auto rounded border-4 border-purple-800 p-4  text-purple-800 hover:text-white hover:bg-purple-800 text-lg">
        Add quote
        </button>
    </div>
    <h1 className=" bg-purple-800 text-white text-[40px] font-semibold underline text-center mt-8">
      Daily Quotes List
    </h1>
    <div className="grid grid-cols-2 gap-5 mt-8">
      {
        quote.map((item:any,index:number)=>{
          return(
            <div className="shadow p-4 gap-4 rounded" key={index}>
            <div className="flex flex-row justify-between my-auto">
              
                
            <span className="rounded-[50%] shadow  p-2 ">{index+1}</span>
            <span onClick={()=>DeleteQuote(item.id)} className="rounded-[50%] shadow  p-2 text-red-700 cursor-pointer">X</span>
            </div>
            <div className="flex flex-col justify-between mt-5 gap-4">
            <h2 className="text-lg text-green-500 ">Id:{item.id}</h2>
            <h2 className="text-lg   text-purple-700 cursor-pointer underline">{item.author}</h2>
              <h2 className="text-lg  text-purple-700 cursor-pointer">{item.quote}</h2>
              
              <button onClick={()=>EditQuote(item.id)}className="rounded-sm text-lg shadow hover:text-purple-800 p-2 cursor-pointer">Edit</button>
            </div>
          </div>
          )
        })
      }
     
      </div>
    </div>
   
  );
}
