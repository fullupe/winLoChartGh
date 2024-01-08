
import { NextResponse } from "next/server"

const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export async function GET(req: Request, res: Response){

    //const response = await fetch(`https://script.google.com/macros/s/AKfycbySGjh8wWPBnIerlc42ZIBGFK81l2xUZw0i1tfEECKiFH2MopX8VFotUuX4OshXL-FgEQ/exec?action=getData`,{ cache: 'no-store' })
    const response = await fetch(`${URL}getData`,{ cache: 'no-store' })
    const Data = await response.json()
    
  return new Response(JSON.stringify(Data))



}
export const revalidate =0;





