import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import garder from "../assest/Garden.jpg";
import "./Home.css";
import Data from "../topData/Data";
const Home = () => {
  //!---------------Hooks-----------------
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  //!---------SetHooks-----------

  useEffect(() => {
    setdata(Data);
  }, []);

  //! --------------------------
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
    //! Header Image Section
    <div className="container">
      <div className="header">
        <img src={garder} alt="description" className="garden" />
      </div>
      <h1 className="heading_01">Our Top Plant</h1>
      <div className="top_plant_conat">
        <div className="top_plant_conat_2">
          <Slider {...settings}>
            {data.map((ele, id) => {
              return (
                <div className="top_plant_card">
                  <div className="top_plant_img">
                    <img src={ele.Image} alt="" className="img_01"></img>
                  </div>
                  <div className="top_plant_card_01">
                    <p className="top_plant_title">{ele.commonName}</p>
                    <p>{ele.description}</p>
                    <button
                      className="btn-01"
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
              );
            })}
          </Slider>
        </div>
      </div>
      <h1 className="heading_02">See Our Services</h1>
      <div className="service_container">
      <div className="services_conatiner_2">

      <div className="our_services">
      <div className="our_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
      </div>
  
      <div className="our_serivces_01">
        <p className="our_services_title">Responsive</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  
   
      <div className="our_services">
      <div className="our_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
      </div>
      <div className="our_serivces_01">
        <p className="our_services_title">Responsive</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  

      <div className="our_services">
      <div className="our_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
      </div>
      <div className="our_serivces_01">
        <p className="our_services_title">Responsive</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  

        </div>
      </div>

  <h1 className="heading_03">What Customer Says<br/>About Our services</h1>


   <div className="customer_revi">
    <div className="customer_revi_2">

    <div className="customer_services">
      <div className="customer_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
      </div>
  
      <div className="customer_serivces_01">
        <p className="customer_services_title">Nikhil Raj</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  

      <div className="customer_services">
      <div className="customer_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
      </div>
  
      <div className="customer_serivces_01">
        <p className="customer_services_title">Himanshu Raj</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  

      <div className="customer_services">
      <div className="customer_services_img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
      </div>
  
      <div className="customer_serivces_01">
        <p className="customer_services_title">Editor Baba</p>
        <p className="customer_services_para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quam?</p>
      </div>
      </div>  
      
    </div>
   </div>
     
   <footer className="footer">
       
        <div className="main">
          <div>
            <h1>Garden Guru</h1>
            <p>The Best and eaisest way to<br/> plant a tree</p>
          </div>
          <div>
            <h2>Usefull Link</h2>
            <ul>
              <li>About Us</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Faq</li>
            </ul>
          </div>
          <div>
            <h2>Main Menu</h2>
            <ul>
              <li>Home</li>
              <li>Plant Indoor</li>
              <li>Plant Outdoor</li>
              <li>Menus</li>
              <li>Sign up</li>
            </ul>
          </div>
          <div>
            <h2>Contact Us</h2>
             <p>Ankitpandey62042@gmail.com</p>
             <p>+91 6204265733</p>
             <p>Chitkara university H.P</p>
          </div>
          
        </div>
        <p>© 2024 Garden Guru. All rights reserved.</p>
      </footer> 
    </div>
  );
};

export default Home;
