import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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

  return (
    //! Header Image Section
    <div className="container">
      <div className="header">
        <img src={garder} alt="description" className="garden" />
      </div>
      <h1>Top Plant</h1>
    
      {data.map((ele, id) => {
        return (
          <>
            <div className="toSection">
              <div className="left">
               <img src={ele.Image}></img>
              </div>
              <div className="right">
                <h1>Title: {ele.Title}</h1>
                <h1>Origin: {ele.Origin}</h1>
                <h1>AnotherName{ele.AnotherName}</h1>
                <h1>Common name:{ele.CommonName}</h1>
              </div>
              <button onClick={() => navigate(`/pagenavigation/${id}`, { state: { plant: ele } })}>View More</button>
            </div>
          </>
        );
      })}

      <footer className="footer">

        <p>© 2024 Garden Guru. All rights reserved.</p>
        <div className="main">
          <div>
            <h2>About Webapge</h2>
            <ul>
              <li>gnfkj</li>
              <li>ajsdfbjds</li>
              <li>adsfjjdsaf</li>
              <li>adfnkjadfs</li>
              <li>ajdshfjdb</li>
            </ul>
          </div>
          <div>
            <h2>About Webapge</h2>
            <ul>
              <li>gnfkj</li>
              <li>ajsdfbjds</li>
              <li>adsfjjdsaf</li>
              <li>adfnkjadfs</li>
              <li>ajdshfjdb</li>
            </ul>
          </div>
          <div>
            <h2>About Webapge</h2>
            <ul>
              <li>gnfkj</li>
              <li>ajsdfbjds</li>
              <li>adsfjjdsaf</li>
              <li>adfnkjadfs</li>
              <li>ajdshfjdb</li>
            </ul>
          </div>
          <div>
            <h2>About Webapge</h2>
            <ul>
              <li>gnfkj</li>
              <li>ajsdfbjds</li>
              <li>adsfjjdsaf</li>
              <li>adfnkjadfs</li>
              <li>ajdshfjdb</li>
            </ul>
          </div>
          <div>
            <h2>About Webapge</h2>
            <ul>
              <li>gnfkj</li>
              <li>ajsdfbjds</li>
              <li>adsfjjdsaf</li>
              <li>adfnkjadfs</li>
              <li>ajdshfjdb</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
