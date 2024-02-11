import React, { useEffect, useState } from 'react'
import Data from '../topData/indoorData'
import { useNavigate } from 'react-router-dom';
import './Indoor.css'

const PlantDetailsIndoor = () => {

    const[data,setdata]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        setdata(Data)
    },[]);

  return (
    <div className='indoor_conatiner'>
      <div className='indoor_container_01'>
        <h1 className='heading_04'>Our Best Indoor Plant</h1>
             {
              data.map((ele,id)=>{
                return(
                 <>
                  <div className='indoor_section'>
                     <div className='indoor_img'>
                      <img src={ele.images} alt='' className='img'></img>
                     </div>
                     <div className='indoor_section_01'>
                        <h2 className='indoor_h2'>Common Name : {ele.commonName}</h2>
                         <p className='indoor_desc'>{ele.description}</p>
                         <button onClick={() => navigate(`/pagenavigation/${id}`, { state: { plant: ele } })} className='btn_indorr'>View More</button>
                     </div>
                  </div>
                 </>
                )
              })
             }
      </div>
    </div>
  )
}

export default PlantDetailsIndoor
