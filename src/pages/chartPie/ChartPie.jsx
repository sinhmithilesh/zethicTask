import React from 'react';
import "./chartPie.css";
import { fakeData } from '../../fakeData';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';


// it will count repeataion of car models
function modelFrequency(arr){
    const map = new Map()
    for(let i in arr){
        const spilted = arr[i].vehicle.Model.split(" ")[0]
        if(!map.has(spilted)){
            map.set(spilted, 1)
        }
        else{
            map.set(spilted, map.get(spilted) + 1)
        }
     } 
    return map 
  }


// it will count repeation of car age , well we we can do with only one function
function ageFrequency(arr){
    const map = new Map()
    for(let i in arr){
        const spilted = arr[i].vehicle.carAge
        if(!map.has(spilted)){
            map.set(spilted, 1)
        }
        else{
            map.set(spilted, map.get(spilted) + 1)
        }
     } 
    return map 
}

// for car Model
// we need 'name-value' pair so we can dispaly directly to Chart
function makeObject(){
  const extractedData = modelFrequency(fakeData)  // Map structured
  const result= [...extractedData.entries()]  // convert Map structer into Array
  const resultArr = []
  result.forEach(item => {
    let obj = {}                                
    obj.name = "Company " + item[0]
    obj.value = item[1]
    resultArr.push(obj)
    obj = {}
  })
  return resultArr
}


// for car age 
function makeAgeObject(){
  const extract = ageFrequency(fakeData)
  const result= [...extract.entries()]  // convert Map structer into Array
  const resultArr = []
  result.forEach(item => {
    let obj = {}  
    obj.name = "age " + item[0]
    obj.value = item[1]
    resultArr.push(obj)
  })
  return resultArr
}

const carCompanyDetails =  makeObject()
const carAgeDetails = makeAgeObject()


//Reactcomponent
export default function ChartPie() {

  const [select, setSelected] = useState("carAge")

  return (
    <div className='pieChart'>
      <div className='pieChartBtn'>
        <button onClick={()=>setSelected("carAge")}>By Car Age</button>
        <button onClick={()=>setSelected("carModel")}>By Car Model</button>
      </div>
      <h3 className='pieHeading'>{select==='carAge'? "By Car Age" : 'By Car Model'}</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={select === 'carAge' ? carAgeDetails : carCompanyDetails}
              cx="35%"
              cy="45%"
              outerRadius={200}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
