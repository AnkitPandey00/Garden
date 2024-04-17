// import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
// import Data from "../topData/Data";
// import { toast } from "react-toastify";
import {p3} from '../assest/';
// import Sign from "../SignIn/Sign";

const Home = () => {
  //!---------------Hooks-----------------
  // const [data, setdata] = useState([]);
  // const navigate = useNavigate();
  //!---------SetHooks-----------

  // useEffect(() => {
  //   setdata(Data);
  // }, []);

  //! --------------------------
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  // };


  // const notifyB = () => {
  //   toast.success("Plant added to your collection");
  // }
  // const notifyA = () => {
  //   toast.error("Plant is already in your collection");
  // }

  // const handleClickAdd = (plant) => {
  //   const currentData = JSON.parse(localStorage.getItem('userPlantAdded')) || [];
  //   if (currentData[plant.id]) {
  //     notifyA();
  //     return;
  //   }
  //   const updatedData = { ...currentData, [plant.id]: plant };
  //   localStorage.setItem('userPlantAdded', JSON.stringify(updatedData));
  //   notifyB();
  //   navigate('/adminpage/myplant')
  // };

  return (
    <div className='w-full bg-white py-24 '>
    <div className='md:max-w-[1280px] m-auto grid gap-y-450px md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
        
        <div className='flex flex-col justify-space-between gap-4'>
        
            <p className='py-2 text-2xl text-[#20B486] font-medium'>GREENIFY YOUR LIFE</p>
            <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Cultivate <span className='text-[#20B486]'>Dreams.</span><br/>
            Thrive with <span className='text-[#20B486]'>Nature.</span><br />
            Blossom Your <span className='text-[#20B486]'>Garden.</span>
            </h1>
            <p className='py-2 text-lg text-gray-600'>Let us guide you through every step of your gardening journey, from planting the first seed to reaping a harvest of success.</p>
            
            <button className='bg-[#20B486] border max-w-[170px] p-4 shadow-2xl rounded-md  text-white text-2xl hover:bg-[#20b43c] transition-colors duration-300'>
            <NavLink to="/signin">Get Started</NavLink>
                </button>
        </div>
        
        <img  src={p3} alt="" className="md:order-last order-first h-[500px] md:h-[600px] md:ml-[150px]" />
    </div>
</div>

  //   //! Header Image Section
  //   <div className="container">
  //     <div className="header">
  //       <img src={garder} alt="description" className="garden" />
  //     </div>
  //     <h1 className="heading_01">Our Top Plant</h1>
  //     <div className="top_plant_conat">
  //       <div className="top_plant_conat_2">
  //         <Slider {...settings}>
  //           {data.map((ele, id) => {
  //             return (
  //               <div className="top_plant_card">
  //                 <div className="top_plant_img">
  //                   <img src={ele.images} alt="" className="img_01"></img>
  //                 </div>
  //                 <div className="top_plant_card_01">
  //                   <p className="top_plant_title">{ele.commonName}</p>
  //                   <p>{ele.description.split(' ').slice(0, 20).join(' ')}</p>
  //                     <div >
  //                     <button
  //                     className="btn-01"
  //                     onClick={() =>
  //                       navigate(/pagenavigation/${id}, {
  //                         state: { plant: ele },
  //                       })
  //                     }
  //                   >
  //                     View More
  //                   </button>
  //                   {/* <button  onClick{handleClickedAdd}) style={{marginLeft:"10px"}}  className="btn-01">+</button> */}
  //                   <button
  //                     style={{marginLeft:"10px"}}
  //                     className="btn-01"
  //                     onClick={() => handleClickAdd(ele)}
  //                   >
  //                    +
  //                   </button>
  //                     </div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </Slider>
  //       </div>
  //     </div>
  //     <h1 className="heading_02">See Our Services</h1>
  //     <div className="service_container">
  //     <div className="services_conatiner_2">

  //     <div className="our_services">
  //     <div className="our_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
  //     </div>
  
  //     <div className="our_serivces_01">
  //       <p className="our_services_title">Database-Rich</p>
  //       <p>Access an extensive plant database with detailed care instructions and growing tips.</p>
  //     </div>
  //     </div>  
   
  //     <div className="our_services">
  //     <div className="our_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
  //     </div>
  //     <div className="our_serivces_01">
  //       <p className="our_services_title">Community</p>
  //       <p>Connect with fellow gardening enthusiasts to share experiences and insights.</p>
  //     </div>
  //     </div>  

  //     <div className="our_services">
  //     <div className="our_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_02"></img>
  //     </div>
  //     <div className="our_serivces_01">
  //       <p className="our_services_title">e-Garden</p>
  //       <p>Easily add plants to your garden and set personalized care reminders.</p>
  //     </div>
  //     </div>  

  //       </div>
  //     </div>

  // <h1 className="heading_03">What Customer Says<br/>About Our services</h1>


  //  <div className="customer_revi">
  //   <div className="customer_revi_2">

  //   <div className="customer_services">
  //     <div className="customer_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
  //     </div>
  
  //     <div className="customer_serivces_01">
  //       <p className="customer_services_title">Kwana Maphaka</p>
  //       <p>This app is a game-changer! I love having all the plant care info in one place.</p>
  //     </div>
  //     </div>  

  //     <div className="customer_services">
  //     <div className="customer_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
  //     </div>
  
  //     <div className="customer_serivces_01">
  //       <p className="customer_services_title">Himanshu Raj</p>
  //       <p>Connecting with other plant enthusiasts on this platform has been so rewarding!</p>
  //     </div>
  //     </div>  

  //     <div className="customer_services">
  //     <div className="customer_services_img">
  //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AJfMfQaQkBBpk5kja9sOaq9CVVKrrVeluQ&usqp=CAU" alt="" className="img_03"></img>
  //     </div>
  
  //     <div className="customer_serivces_01">
  //       <p className="customer_services_title">David wiese</p>
  //       <p className="customer_services_para">The reminder feature has made plant care a breeze—I'm seeing better results already!</p>
  //     </div>
  //     </div>  
      
  //   </div>
  //  </div>
     
  //  <footer className="footer">
       
  //       <div className="main">
  //         <div>
  //           <h1>Garden Guru</h1>
  //           <p>The Best and eaisest way to<br/> plant a tree</p>
  //         </div>
  //         <div>
  //           <h2>Usefull Link</h2>
  //           <ul>
  //             <li>About Us</li>
  //             <li>Events</li>
  //             <li>Blogs</li>
  //             <li>Faq</li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h2>Main Menu</h2>
  //           <ul>
  //             <li>Home</li>
  //             <li>Plant Indoor</li>
  //             <li>Plant Outdoor</li>
  //             <li>Menus</li>
  //             <li>Sign up</li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h2>Contact Us</h2>
  //            <p>Ankitpandey62042@gmail.com</p>
  //            <p>+91 6204265733</p>
  //            <p>Chitkara university H.P</p>
  //         </div>
          
  //       </div>
  //       <p>© 2024 Garden Guru. All rights reserved.</p>
  //     </footer> 
  //   </div>
  );
};

export default Home;
