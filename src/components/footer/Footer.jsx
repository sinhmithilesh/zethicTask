import React, { startTransition, useEffect, useMemo } from 'react'
import { useState } from 'react'
import "./footer.css"

export default function Footer({totalPages, totalList, setPage, page}) {
    const [pageClicked, setPageClicked] = useState(page)
    const [range, setRange] = useState(0)
    const [showPageSet, setShowPageSet] = useState([])
    const [result, setResult] = useState([])

    
   useEffect(()=>{
    const slicetotalPage = (list, count) => {
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
        setResult(resultList)
      }
    return slicetotalPage(totalPages, 5)
   },[totalPages])
       

    
    const hanldeTextClick = (textBtn) => {
        if(textBtn === 'first'){
            setPage(0)
            setRange(0)
            setPageClicked(0)
        }
        else if(textBtn === "last"){
            setRange(result.length-1)   
        }
        else if(textBtn === "next"){  
            setRange(range + 1)
        }
        else if(textBtn === "prev"){
            setRange(range-1)
        }
    }
    
    
  return (
    <div className='footer'>
        <ul className='footerList'>
            { page > 0 
                ? <li className='footerListItemText' onClick={()=>hanldeTextClick('first')}>First</li> 
                : <li className='hideElement'>First</li>
            }

            { range > 0 
                ? <li className='footerListItemText' onClick={()=>hanldeTextClick('prev')}>PrevSet</li>
                : <li className='hideElement'>Prev</li>
            }       

            {
                result[range]?.map((item, index) =>{
                    return(
                        <li 
                            key={index}
                            className={pageClicked === index ? "footerListItem pageClicked" : "footerListItem"}
                            onClick={()=>{
                                setPageClicked(index)
                                setPage(item-1)
                            }}
                            >{item}
                        </li>
                    )
                })
            }
         

            { range < result.length -1 ?
                <li className='footerListItemText' onClick={()=>hanldeTextClick('next')}>NextSet</li>
                : <li className='hideElement'>Next</li>
            }


            { range !== result.length-1
                ? <li className='footerListItemText' onClick={()=>hanldeTextClick('last')}>Last</li> 
                : <li className='hideElement'>Last</li>
            }
        </ul>
    </div>
  )
}
