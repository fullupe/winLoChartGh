import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

type Props = {
    setGameType:React.Dispatch<React.SetStateAction<string>>;
    gameType:string;
    customStyle?:string
}

function ListGames({gameType,setGameType, customStyle}: Props) {
  return (
    <div className={`w-full flex items-center justify-center ${customStyle}`}>
                <Select value={gameType} onValueChange={setGameType}>
                <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select Game's" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                <SelectLabel>Games</SelectLabel>
                <SelectItem value="5/39 DIRECT FRIDAY">5/39 DIRECT FRIDAY</SelectItem>
                <SelectItem value="5/39 DIRECT THURSDAY">5/39 DIRECT THURSDAY</SelectItem>
                <SelectItem value="5/39 DIRECT WEDNESDAY">5/39 DIRECT WEDNESDAY</SelectItem>
                <SelectItem value="WEDNESDAY NOONRUSH">WEDNESDAY NOONRUSH</SelectItem>
                <SelectItem value="SUNDAY ASEDA">SUNDAY ASEDA</SelectItem>
                <SelectItem value="THURSDAY NOONRUSH">THURSDAY NOONRUSH</SelectItem>
                <SelectItem value="SATURDAY NOONRUSH">SATURDAY NOONRUSH</SelectItem>
                <SelectItem value="MONDAY NOONRUSH">MONDAY NOONRUSH</SelectItem>
                <SelectItem value="TUESDAY NOONRUSH">TUESDAY NOONRUSH</SelectItem>
                <SelectItem value="RIDAY NOONRUSH">RIDAY NOONRUSH</SelectItem>
                <SelectItem value="5/39 DIRECT SATURDAY">5/39 DIRECT SATURDAY</SelectItem>
                <SelectItem value="5/39 DIRECT TUESDAY">5/39 DIRECT TUESDAY</SelectItem>
                <SelectItem value="5/39 DIRECT MONDAY">5/39 DIRECT MONDAY</SelectItem>
                

                <SelectItem value="MONDAY SPECIAL">MONDAY SPECIAL</SelectItem>
                <SelectItem value="VAG MONDAY">VAG MONDAY</SelectItem>

                {/* <SelectItem value="LUCKY NG EAST">LUCKY NG EAST</SelectItem> */}
                <SelectItem value="LUCKY TUESDAY">LUCKY TUESDAY</SelectItem>
                <SelectItem value="VAG TUESDAY">VAG TUESDAY</SelectItem>

                {/* <SelectItem value="MIDWEEK EAST">MIDWEEK EAST</SelectItem> */}
                <SelectItem value="MID WEEK GH">MID WEEK GH</SelectItem>
                <SelectItem value="VAG WEDNESDAY">VAG WEDNESDAY</SelectItem>
               

                <SelectItem value="FORTUNE">FORTUNE</SelectItem>
                {/* <SelectItem value="FORTUNE EAST">FORTUNE EAST</SelectItem> */}
                <SelectItem value="VAG THURSDAY">VAG THURSDAY</SelectItem>

                <SelectItem value="BONANZA">BONANZA</SelectItem>
                {/* <SelectItem value="BONANZA EAST">BONANZA EAST</SelectItem> */}
                <SelectItem value="VAG FRIDAY">VAG FRIDAY</SelectItem>

                {/* <SelectItem value="NATIONAL EAST">NATIONAL EAST</SelectItem> */}
                <SelectItem value="NATIONAL">NATIONAL</SelectItem>
                <SelectItem value="VAG SATURDAY">VAG SATURDAY</SelectItem>

                <SelectItem value="SUNDAY SPECIAL">SUNDAY SPECIAL</SelectItem>
                {/* <SelectItem value="BLESSED SUNDAY">BLESSED SUNDAY</SelectItem> */}
                </SelectGroup>
                </SelectContent> 
                </Select>
               </div>
  )
}

export default ListGames