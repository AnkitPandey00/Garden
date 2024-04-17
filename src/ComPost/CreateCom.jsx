import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import './CreateCom.css'
import { useNavigate } from "react-router-dom";
const CreateCom = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [communityId, setCommunityId] = useState(null);
  const[url,setUrl] = useState("");
  const navigate=useNavigate();
  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  useEffect(() => {
    setCommunityId(localStorage.getItem("communityId"));
  }, []);

  //! creating notify function to display as pop up when user signed
  const notify = (msg) => {
    toast.error(msg);
  };
  const notifyB = (msg) => {
    toast.success(msg);
  };

  useEffect(()=>{
    //! when we recievd url then only send data because cloudinary take somwtime to upload image and generate url of images
    if(url){
    fetch("http://localhost:8080/addpost", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title: title,
        desc: desc,
        pic:url,
        communityId: communityId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notify(data.error);
        } else {
          notifyB("Sucessfully Posted");
          navigate('/community');
        }
      })
      .catch((err) => console.log(err));
    }
    },[communityId, desc, title, url])


  const PostPost=()=>{
    const data = new FormData();
    data.append("file",img);
    data.append("upload_preset","GardenGurur");
    data.append("cloud_name","pandeycloud");
    fetch('https://api.cloudinary.com/v1_1/pandeycloud/image/upload',{
      method:"post",
      body: data,
    }).then(res=>res.json())
      .then(data=>setUrl(data.url))
      .catch(err=>console.log(err))
  }
  return (
    <div className="Create_post">
      <button onClick={()=>PostPost()} className="create_post_btn1" >Share</button>
      <div>
        <div className="create_img">
          <img
            id="output"
            src="https://imgs.search.brave.com/WNbfIJdMRVAzkFO-_d87ZkMhdMCiAYGshQVSr39N0DM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI5LzY2LzI0/LzM2MF9GXzEyOTY2/MjQyNV9QZlh4dkZO/MVpjYnRpZUNpb1hh/Y00wdWNrQjF2UzRq/aC5qcGc"
            alt="text"
            className="img_sel"
          />
        </div>
        <div className="create_img_input">
          <input type="file" accept="image/*"
          className="input_img" 
          onChange={(event)=>{
          loadFile(event);
          setImg(event.target.files[0])
          }} />
        </div>
      </div>
      <div>
        <div className="create_post_title">
          <input
            className="text_input"
            type="text"
            placeholder="Enter Your Community Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="create_post_textarea">
          <textarea
          className="text_com"
            type="text"
            placeholder="Write A Caption"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
      
    </div>
  );
};

export default CreateCom;
