import React from 'react'
import colors from "../../colors"
type Props = {
     results:{}
}

function Statisticboard({results}: Props) {
  const numbersArray = Array.from({ length: 90 }, (_, index) => index + 1);

  //const color = ["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-orange-500", "bg-voilet-500"]
  return (
    <div className="grid grid-cols-9 gap-2  p-4 w-full shadow-xl  dark:bg-slate-900 bg-slate-00 rounded-xl dark:border-neutral-800">
      {numbersArray.map((number,i) => (
    
        <div
          key={number}
          className={`${colors[Math.floor(Math.random()*4)]} shadow-xl border-2 mx-auto border-black  text-white relative rounded-full flex  items-center justify-center  h-9 w-9 md:w-12 md:h-12`}
          >
          <p>{number}</p>

          {
            Object.entries(results).map((val,i) =>{

            return (

                <div key={val[0]}>
               {val[0] == number.toString() && (
                 <p className="absolute rounded-full  border-white border-2 bg-black justify-center flex items-center text-center z-10 shadow-lg  text-[9px] h-5 w-5 top-5 left-5 md:left-10">{val[1] as string }</p>
                 )
                  
                 }
               </div>
            )
             

              
               })
          }


        </div>
      ))}

      {/* [Math.floor(Math.random()*colors.length-1)] */}

    </div>
  )
}

export default Statisticboard