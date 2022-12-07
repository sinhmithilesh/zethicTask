import React, { useMemo } from 'react';
import "./chartBar.css"
import { fakeData } from '../../fakeData';

import { ResponsiveContainer, BarChart, Bar , XAxis, YAxis } from 'recharts';

export default function ChartBar() {

const barChartData = useMemo(()=>{
  const result = []
  let obj = {}
  const count = frequency(fakeData)
  const data = [...count.entries()]
  data.forEach(item =>{
    obj.country = item[0]
    obj.userCount = item[1]
    result.push(obj)
    obj = {}
  } )
  return result
},[])               // no need put dependecny 'fakeData` as it is outScoped. 


  
function frequency(arr){
  const map = new Map()
  for(let i in arr){
       if(!map.has(arr[i].country)){
          map.set(arr[i].country, 1)
       }
       else{
          map.set(arr[i].country, map.get(arr[i].country) + 1)
       }
   } 
  return map 
}



  return (
    <div className='barChart'>
        <ResponsiveContainer height="50%" width="70%">
          <BarChart data={barChartData} >
            <XAxis dataKey='country'/>
            <YAxis />
            <Bar dataKey='userCount' fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer> 
    </div>
  )
}

