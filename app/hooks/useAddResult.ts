
import { useState } from "react"
import { toast } from "react-toastify";


type Props = {
        result_id: string;
        game_type: string;
        num_1: string;
        num_2: string;
        num_3: string;
        num_4: string;
        num_5: string;
        // num_6: string;
        // num_7: string;
        // num_8: string;
        // num_9: string;
        // num_10: string;
        // num_11: string;
        // num_12: string;
       createdAt: Date;
}





const Base_URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string;

export const useAddResult=()=>{


  const [Loading, SetLoading] = useState<boolean>(false);

  const add_Result=  (request:Props)=>{
    
    const xmlHttp = new XMLHttpRequest()
      xmlHttp.open('POST', `${Base_URL}addData`, true) // false for synchronous request
   
    if(xmlHttp.readyState==1){
      SetLoading(true)
    }else {
      SetLoading(false)
    }

     xmlHttp.send(JSON.stringify(request)) // Make sure to stringify
    
    xmlHttp.onload = function (){
    
        SetLoading(false)
    

      toast('Records Updated!', {
        icon: '🚀',
      })
    }
    
    xmlHttp.onerror = function () {
   
      //console.log(xmlHttp.responseText)
    }
   

 }


    return { Loading,SetLoading,add_Result}

}