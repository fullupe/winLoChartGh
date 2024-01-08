'use client'

import Statisticboard from './components/Statisticboard'
import colors from '../colors'
import React, { useState } from 'react'
import DatePicker from './components/DatePicker'

import daysSpent from "./helper/daysSpent"

//import { Select, SelectItem } from "@tremor/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'


import {CalendarIcon, ListRestartIcon, SearchIcon } from 'lucide-react'
import DarkModeToggle from './components/DarkModeToggle'


import { filterData } from './helper/filtedData'
import ListGames from './components/ListGames'





export default function Home() {

  //const {DataApi}=useFetchData()
  const [startdate, setStartDate] = useState<Date>()
  const [enddate, setEndDate] = useState<Date>()

  const [gameType, setGameType] = useState<string>('')
                                       // @ts-ignore
  const DataApi =filterData(startdate,enddate,gameType) 



  //console.log("data,",DataApi)
  
  const results = DataApi.reduce((acc, item) => {
    const {
      num_1,
      num_2,
      num_3,
      num_4,
      num_5,
     
    } = item
    // @ts-ignore
    // Count for num_1 to num_12
    acc[num_1] = (acc[num_1] || 0) + 1 // @ts-ignore
    acc[num_2] = (acc[num_2] || 0) + 1 // @ts-ignore
    acc[num_3] = (acc[num_3] || 0) + 1 // @ts-ignore
    acc[num_4] = (acc[num_4] || 0) + 1 // @ts-ignore
    acc[num_5] = (acc[num_5] || 0) + 1 // @ts-ignore
    

    return acc
  }, {})

  
// @ts-ignore

  let sortedResult = Object.entries(results).sort((a,b)=>b[1] - a[1]).slice(0,8).splice(1)

  const handleReset=()=>{
    setGameType('')
    setStartDate(undefined)
    setEndDate(undefined)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex min-h-screen flex-col items-center justify-centerd w-full relative">
        <div className="z-50 max-w-5xl w-full mb-12  items-center font-mono text-sm lg:flex">
          
          <div className="fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-autos  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <div className="flex  mr-6 ">
              <DarkModeToggle />
            </div>
            WinLo
            <code className="font-mono font-bold">Chart Gh</code>
            
            <div className="flex  ml-4 md:hidden">
              <Dialog>
                <DialogTrigger asChild>
                
                  <CalendarIcon className="ml-6 h-6 w-8 cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Options</DialogTitle>
                    <DialogDescription>
                     Select your Game
                    </DialogDescription>
                  </DialogHeader>


                <ListGames gameType={gameType} setGameType={setGameType} customStyle="pl-12"/>

               

                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col w-full items-center mb-8 space-y-4 md:flex ">
                      <div className="flex items-center space-x-4">
                        <p className="flex items-left font-bold font-mono">
                          From
                        </p>
                       
                        <DatePicker
                          startdate={startdate}
                          setStartDate={setStartDate}
                        />
                      </div>

                      <div className="flex items-center space-x-4 mb-4">
                        <p className="flex items-left ml-4 font-bold font-mono">
                          To
                        </p>
                        <DatePicker
                          startdate={enddate}
                          setStartDate={setEndDate}
                        />
                      </div>
                    </div>
                  </div>

       
                  <DialogFooter className="z-10 ">

                  <div className="flex w-full mt-4 justify-center space-x-40 ">
                  <DialogTrigger onClick={()=>handleReset()} asChild>
                   
                    <ListRestartIcon className="ml-6 h-6 w-8 cursor-pointer"/>
                    
                  </DialogTrigger>

                  <DialogTrigger asChild>
                   {
                     gameType && (
                       <SearchIcon className="ml-6 h-6 w-8 cursor-pointer"/>

                     )
                   }
                  </DialogTrigger>
                  </div>

                    {/* <Button type="submit">Search</Button> */}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* <p className="ml-3 text-xs">{daysSpent() as string}</p> */}
          </div>
        </div>

          <div className="flex w-full justify-center mt-2 font-mono ">
            {
              gameType &&(

                <p>{gameType}</p>
              )
            }

          </div>

        <div className="absolute top-0 animate-blob animation-delay-4000 mix-blend-multiply filter blur-2xl  bg-yellow-200 -left-4 w-72 h-72 rounded-full -z-10"></div>

        <div className="absolute animate-blob animation-delay-3000 top-0 mix-blend-multiply filter blur-2xl  bg-indigo-800 -right-4 w-72 h-72 rounded-full -z-10"></div>

        <div className="absolute animate-blob animation-delay-2000 mix-blend-multiply filter blur-2xl left-20 bg-pink-800 -bottom-8 w-72 h-72 rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row-reverse items-center h-full w-full justify-center">
          <Statisticboard results={results} />

          <div className="flex flex-col  h-full w-full md:w-[50%] dark:bg-slate-900 rounded-lg md:py-6 items-center justify-center md:mr-4 mt-4 space-y-1">
            
          
            
            <div className="flex flex-col w-full items-center mb-8 space-y-4 hidden md:flex ">

            <div className="w-full flex flex-col items-center justify-center pl-12 mb-3">
            <p className="text-center text-md font-bold pb-3"> Select your Game</p>

                <ListGames gameType={gameType} setGameType={setGameType} customStyle="pl-0"/>
               </div>


               <div className="flex w-full mt-4 justify-center space-x-40 ">
                  <div onClick={()=>handleReset(

                  )} >
                   
                    <ListRestartIcon className="ml-6 h-6 w-8 cursor-pointer"/>
                    
                  </div>
                  </div>
               



              
              <div className="flex items-center space-x-4">
                <p className="flex items-left font-bold font-mono">From</p>

               
                <DatePicker startdate={startdate} setStartDate={setStartDate} />
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <p className="flex items-left ml-4 font-bold font-mono">To</p>
                <DatePicker startdate={enddate} setStartDate={setEndDate} />
              </div>

            </div>
            <p className="flex text-xl font-mono font-bold">
              Most played Numbers
            </p>

            <div className="flex w-full items-center h-24 rounded-full bg-blue-900d shadow-lg overflow-hidden">
              <div className="flex overflow-x-scroll  hide-scroll-bar py-2 h-full items-center">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10  ">
                  

                      {
                        sortedResult.map((va)=>(
                          <div className="relative items-centers justify-center flex">
                      <div
                        key={va[0]}
                        className={` ${
                          colors[Math.floor(Math.random() * 4)]
                        } shadow-xl inline-block  border-2 mx-auto border-black  text-white  rounded-full flex  items-center justify-center  h-14 w-14 md:w-12 md:h-12`}
                      >
                        <p className="text-2xl">{va[0] as string}</p>
                        
                      </div>

                      <p className="absolute rounded-full  border-white border-2 bg-black justify-center flex items-center text-center z-10 text-white shadow-lg  text-[9px] h-5 w-5 top-10 left-5 md:left-4">{va[1] as string }</p>

                      </div>

                        ))
                      }

                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </main>
  )
}
