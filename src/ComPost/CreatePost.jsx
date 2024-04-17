import React from "react";
import { useState } from "react";
import "./CreatePost.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const navigate=useNavigate();

  //! creating notify function to display as pop up when user signed
  const notify = (msg) => {
    toast.error(msg);
  };
  const notifyB = (msg) => {
    toast.success(msg);
  };

  function postData(){
    //! when we recievd url then only send data because cloudinary take somwtime to upload image and generate url of images
    fetch("http://localhost:8080/createComminty", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notify(data.error);
        } else {
          notifyB("Sucessfully Posted");
          navigate('/community')
        }
      })
      .catch((err) => console.log(err));
    }
  return (
    <div className="Create_post">
      <div className="Create_post_02">
        <div className="create_post_title">
          <input
            type="text"
            className="title_txt"
            placeholder="Enter Your Community Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="create_post_textarea">
          <textarea
          className="text_area"
            type="text"
            placeholder="Write A Caption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="create_post_btn" onClick={postData}>Submit</button>
    </div>
  );
};

export default CreatePost;
