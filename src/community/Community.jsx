import React, { useEffect, useState } from "react";
import "./Community.css";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Community = () => {
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/mycommunities", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/allcommunities")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(data);
  const hanldeMoved = () => {
    navigate("/createPost");
  };

  function hanldeCreatePost(id) {
    localStorage.setItem("communityId", id);
    navigate("/createCom");
  }
  return (
    <div className="com_main">
      <div className="main_cont_leftside">
        <div className="com_heading">
          <h1>Communities</h1>
        </div>
        <div className="top_comm_head">All Community</div>

        {alldata.allCommunities &&
          alldata.allCommunities.map((ele, index) => {
            const firstChar = ele.postedBy.name.charAt(0);
            return (
              <div
                className="top_comm"
                onClick={() => setSelectedCommunity(ele)}
              >
                <div className="top_commumity">
                  <div className="top_commuity_details">
                    <div className="top_com_first">
                      <p className="top_com_first_p">{firstChar}</p>
                    </div>
                    <div className="top_com_first_details">
                      <p>{ele.title.toUpperCase()}</p>
                      <p className="p_created">
                        Created by <br />
                        {ele.postedBy.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="top_comm_head" style={{marginTop:"28px"}}>My Community</div>
        {data.myCommunities &&
          data.myCommunities.map((ele, index) => {
            const firstChar = ele.postedBy.name.charAt(0);
            return (
              <div
                className="top_comm"
                onClick={() => setSelectedCommunity(ele)}
              >
                <div className="top_commumity">
                  <div className="top_commuity_details">
                    <div className="top_com_first">
                      <p className="top_com_first_p">{firstChar}</p>
                    </div>
                    <div className="top_com_first_details">
                      <p>{ele.title.toUpperCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="main_cont_rightside">
        <div className="main_cont_top">
          <div className="main_comm_search">
            <input
              type="text"
              placeholder="Search Community"
              className="input_comm"
            />
            <button className="comm_search">Search</button>
          </div>
          <div className="create_com">
            <h1 onClick={hanldeMoved}>
              <MdOutlineCreateNewFolder className="icon_post" />
            </h1>
          </div>
        </div>

        <div className="main_cont_bottom">
          {selectedCommunity && (
            <>
              <div className="main_cont_bottom_01">
                <h1>{selectedCommunity.title}</h1>
                <p>{selectedCommunity.desc}</p>
                <h2>Community Created by: {selectedCommunity.postedBy.name}</h2>
                <button onClick={() => hanldeCreatePost(selectedCommunity._id)}>
                  CreatePost
                </button>
              </div>
              <h2 className="top_post">Top Posts</h2>
              <div className="post_top_post">
                <div className="posts_section">
                  {selectedCommunity.posts &&
                  selectedCommunity.posts.length > 0 ? (
                    selectedCommunity.posts.map((post, index) => (
                      <div key={index} className="post_item">
              
                        <h3>{post.title}</h3>
                        <img
                          src={post.image}
                          alt=""
                          width="600px"
                          height="350px"
                        />
                        <p>{post.desc}</p>
                        <div style={{ display: "flex" }}>
                          <input
                            type="text"
                            placeholder="Enter Your Comment"
                            className="input_comment"
                          />
                          <button className="btn_comment">Post</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No posts available</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
