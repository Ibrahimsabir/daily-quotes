import React from "react";
import Link from "next/link";
export type QuotesTypes={
     
        postId:number,
        id: number,
        name: string,
        email:string,
        body: string,
    }


export default async function DailyQuotes(){
    const fetchQuotes = await fetch("https://jsonplaceholder.typicode.com/comments")
    const responseQuote= await fetchQuotes.json();
    return(
        <div>
            <h1 className="flex justify-center text-3xl text-purple-800 mb-32 underline">{`Today's post response`}</h1>
            <ol className="mt-5 ml-12">
                {
                    responseQuote.map((items:any,index:number) => {
            return(            
           <li><Link href={`/quotes/${items.id}/${items.postId}`} key={index}>{items.name}</Link></li>
           
            )
}
)
}
            </ol>
            </div>
    )
}