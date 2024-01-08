
// interface DataItem  {
//     startDate: string;
//     endDate: string; 
//     selectedCategory:string;

import { useFetchData } from "../hooks/useFetchData";

   
//   }

// Function to filter data based on date range and category
export function filterData(startDate:Date, endDate:Date, gameType: string) {
    const {DataApi}=useFetchData()
    return DataApi.filter((item) => {
      // Check if the date is within the specified range
      const dateInRange =
        (!startDate || new Date(item.createdAt).toDateString() >= new Date(startDate).toDateString() ) &&
        (!endDate || new Date(item.createdAt).toDateString()  <= new Date(endDate).toDateString() );
  
      // Check if the category matches the selected category
      const categoryMatch = !gameType || item.game_type === gameType;
  
      // Return true if both conditions are met
      return dateInRange && categoryMatch;
    });
  }
  
  