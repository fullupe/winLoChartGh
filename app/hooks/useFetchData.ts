
import { useEffect, useState } from "react"


//const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string
type resutT={
    id: string,
    game_type:string,
   num_1: string,
   num_2: string,
   num_3: string,
   num_4: string,
   num_5: string,
   num_6: string,
   num_7: string,
   num_8: string,
   num_9: string,
   num_10: string,
   num_11: string,
   num_12: string,
   createdAt:Date

}

export const useFetchData=()=>{
 

    const [fetchReflesh, setFetchReflesh] = useState<boolean>(false)

    const [DataApi, setDataApi] = useState<resutT[]>([])
  
    async function httpGet() {

    // var xmlHttp = new XMLHttpRequest()
    // xmlHttp.open('GET', `${URL}getData`, false) // false for synchronous request
    // xmlHttp.send(null)
    // const ApiData = JSON.parse(xmlHttp.responseText)

    const ApiData =  await fetch("/api/fetchMainData").then((res)=>res.json().then(data=>data.data))
    //const branchDAta = ApiData.filter((B_data:{branch:string})=>B_data.branch == activeUserBranchName)

    setDataApi(ApiData)
   
  }

  useEffect(() => {
    
    httpGet()

  }, [fetchReflesh])


  return {DataApi,fetchReflesh, setFetchReflesh}

}