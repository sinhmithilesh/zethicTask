import "./widgetLg.css";
import React, { useEffect, useMemo, useState } from 'react'

import {fakeData} from "../../fakeData"
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";



// convert list into sub-arrays. example [1,2,3,4,5,6,7,8] => [ [1,2,3], [4,5,6], [7,8] ]
const sliceList = (list, count = 8 ) => {
    let startIndex = 0
    let endIndex = count
    const resultList = []
    
    while(startIndex < list.length){
      resultList.push(list.slice(startIndex, endIndex))
     startIndex += count;
      if(list.length - endIndex >=count){
      endIndex += count;
      }
      else{
        endIndex += list.length - startIndex
      }
    }
    return resultList
  }

// const totalList = sliceList(fakeData)
// const totalPages = countPages(totalList.length)
let matchFound = 0


// component
export default function WidgetLg() {
  const [page, setPage] = useState(0)
  const [searchText, setSearchText] = useState("")
  const [totalList, setTotalList] = useState(sliceList(fakeData) || [])
  const [totalPages, setTotalPages] = useState([])
  const [ageSelected, setAgeSelected] = useState(false)
  const navigate = useNavigate()
  

  // will count the page for pagination
  const countPages = (length) => {
    const arr  = []
    let i = 1
    while(i <= length){
      arr.push(i)
      i++
    }
    return arr
  }
  

  useEffect(()=>{
    // setTotalList(sliceList(fakeData))
    setTotalPages(countPages(totalList.length))
  },[totalList])



  // render userlist based on conditon 
  useEffect(()=>{
    const searchHandler = () => {
      if(searchText.length > 1){
        const matchedUSers = fakeData.filter(item => {
          return (item.username+item.country+item.vehicle.Model+item.vehicle.color).toLowerCase().includes(searchText.toLowerCase())
        })
        matchFound = matchedUSers.length
        setTotalList(sliceList(matchedUSers))
        // setTotalPages(countPages(totalList.length))
      }
      else{
        setTotalList(sliceList(fakeData))
        // setTotalPages(countPages(totalList.length))
      }
    }
    searchHandler()
  },[searchText])



  // sorting based on condition
  const sortBytype = (type) => {
    if(type === "General"){
      window.location.reload()
      return null
    }
    if(type === 'username' || 'country'){
      console.log("reaching")
      var sorted = fakeData.sort((a,b)=>{
        if(a[type] > b[type]){
          return 1
        }
        else if(a[type] < b[type]){
          return -1
        }
        else{
          return 0
        }
      })
    }
    if(type === "Model" || "carAge"){
      var sorted = fakeData.sort((a,b) => {
        if(a.vehicle[type] > b.vehicle[type]){
          return 1
        }
        else if(a.vehicle[type] < b.vehicle[type]){
          return -1
        }
        else{
          return 0
        }
      })
    }
    setTotalList(sliceList(sorted))
    // setTotalPages(countPages(totalList.length))
  }
  

  const filterByAge = (ageSet) => {
    if(ageSet === 'All Age'){
      setAgeSelected(false)
      window.location.reload()
      return null
    }
    setAgeSelected(true)
    const splited = ageSet.split("-")
    var result = fakeData.filter(item => {
      return item.age >= Number(splited[0]) && item.age <= Number(splited[1])
    })
    console.log("result::", result)
    matchFound = result.length
    setTotalList(sliceList(result))
    // setTotalPages(countPages(totalList.length))
   }



  return (
    <div className="widgetLg">
      <div className="widgetSearchBox">
        <div className="widgetSearch">
          <Search className="searchLogo"/>
          <input 
            type="text" 
            placeholder="search"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            />
        </div>
        <div className="SortBox">
          <span className="sortBy">Sort By</span>
          <select className="sortFilter" onChange={(e)=>sortBytype(e.target.value)}>
            <option selected>General</option>
            <option>username</option>
            <option>country</option>
            <option>Model</option>
            <option>color</option>
          </select>

          {/* we can make select box dynamic by creatting an array of values */}
          <span className="filterAge">Age</span>
          <select className="selectFilter" onChange={(e)=>filterByAge(e.target.value)}>
            <option disabled>Select Age</option>
            <option selected>All Age</option>
            <option>18-25</option>
            <option>26-30</option>
            <option>31-35</option>   
            <option>36-40</option>
            <option>41-45</option>
            <option>46-50</option>
            <option>51-55</option>
            <option>56-65</option>
          </select>
          </div>
      </div>
    <div className="widgetLgWrapper">
      <div className="heading">
          <h3 className="widgetLgTitle">People</h3>
          {(searchText.length > 1 || ageSelected)  &&<span className="matchFound">{matchFound} Found</span>}
      </div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Country</th>
          <th className="widgetLgTh">Model</th>
          <th className="widgetLgTh">Color</th>
        </tr>

        {totalList[page]?.map(item => {
        return(
          <tr key={item.id} className="widgetLgTr">
          <td className="widgetLgUser" onClick={()=>navigate("/user/" + item.id)}>
            <img
              src={item.photo}
              alt=""
              className="widgetLgImg"
            />
            <span 
            className="widgetLgName">{item.username}</span>
          </td>
          <td className="widgetLgCountry">{item.country}</td>
          <td className="widgetLgModel">{item.vehicle.Model}</td>
          <td className="widgetLgColor">{item.vehicle.color.slice(0,1).toUpperCase()+item.vehicle.color.substring(1)}</td>
        </tr>
        )
      })}
      </table>
      </div>
     
      <Footer
        totalList={totalList}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />

    </div>

  );
}
