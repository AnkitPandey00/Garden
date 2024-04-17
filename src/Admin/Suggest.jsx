import React from 'react'
import './Admin.css'
import suggestData from '../topData/suggest';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Suggest = () => {
  const data = JSON.parse(localStorage.getItem("Garden")).savedUser;
  const filteredData = suggestData.filter(ele => ele.state.toLowerCase() === data.state.toLowerCase());
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
 <div className='suggest_main'>
        <div className='suggest'>
        <Slider {...settings}>
            {filteredData.map((ele, id) => {
              return (
                <div className="top_plant_card top_suggest">
                  <div className="top_plant_img suggest_img">
                    <img src={ele.images} alt="" className="img_01"></img>
                  </div>
                  <div className="top_plant_card_01">
                    <p style={{color:""}} className="top_plant_title">{ele.commonName}</p>
                    <p style={{color:"white"}}>{ele.description.split(' ').slice(0, 20).join(' ')}</p>
                      <div >
                      <button
                      style={{color:"white"}}
                      className="btn-04"
                      onClick={() =>
                        navigate(`/pagenavigation/${id}`, {
                          state: { plant: ele },
                        })
                      }
                    >
                      View More
                    </button>
                      </div>
                  </div>
                </div>
              );
            })}
             </Slider>
        </div>
      </div>
  )
}

export default Suggest