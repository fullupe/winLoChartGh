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
                {/* <SelectItem value="ABIA SPECIAL">ABIA SPECIAL</SelectItem>
                <SelectItem value="ABA BONANZA">ABA BONANZA</SelectItem>
                <SelectItem value="AKWA IBOM SPECIAL">AKWA IBOM SPECIAL</SelectItem>
                <SelectItem value="ANAMBRA SPECIAL">ANAMBRA SPECIAL</SelectItem>
                <SelectItem value="BLESSED SUNDAY">BLESSED SUNDAY</SelectItem>
                <SelectItem value="CLUBMASTER">CLUBMASTER</SelectItem>
                <SelectItem value="CROSS RIVERS SPECIAL">CROSS RIVERS SPECIAL</SelectItem>
                <SelectItem value="DREAM NIGHT">DREAM NIGHT</SelectItem>
                <SelectItem value="ENUGU SPECIAL">ENUGU SPECIAL</SelectItem>
                <SelectItem value="GOOD NIGHT">GOOD NIGHT</SelectItem>
                <SelectItem value="INTERNATIONAL">INTERNATIONAL</SelectItem>
                <SelectItem value="JACKPOT">JACKPOT</SelectItem>
                <SelectItem value="ONITSHA SPECIAL">ONITSHA SPECIAL</SelectItem>
                <SelectItem value="PEOPLES">PEOPLES</SelectItem>
                <SelectItem value="RNS SPECIAL">RNS SPECIAL</SelectItem>
                <SelectItem value="SAWAKI">SAWAKI</SelectItem>
                <SelectItem value="RNS NAIJA">RNS NAIJA</SelectItem>
                <SelectItem value="RIVERS SPECIAL">RIVERS SPECIAL</SelectItem>
                <SelectItem value="SUNRISE">SUNRISE</SelectItem> */}

                {/* <SelectItem value="MONDAY SPECIAL EAST">MONDAY SPECIAL EAST</SelectItem> */}

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