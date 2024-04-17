// import React, { useState } from "react";
// import "./SignUp.css";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");
//   const navigate = useNavigate();

//   const notify = (msg) => {
//     toast.error(msg);
//   };
//   const notifyB = (msg) => {
//     toast.success(msg);
//   };
//   const postData = () => {
//     fetch("http://localhost:8080/signup", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         userName: username,
//         password: password,
//         country: country,
//         state: state,
//         pincode: pincode,
      
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           notify(data.error);
//         } else {
//           notifyB(data.message);
//           navigate("/signin");
//         }
//         console.log(data);
//       });
//   };

//   return (
//     <div className="signup">
//       <div className="sign_up_desc">
//         <p>
//           <span className="head">Garden Guru !</span>
//           <br />
//           Your ultimate plant care companion! Sign up now to access personalized tips, reminders, and expert advice tailored to your garden's needs. Unlock a world of green-thumb success with our intuitive app designed to nurture your plants and elevate your gardening experience. Join us today!
//         </p>
//       </div>
//       <div className="form-conatiner">
//         <div className="form">
//           <div className="">
//             <input
//               type="email"
//               placeholder="Email *"
//               name="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="">
//             <input
//               type="text"
//               placeholder="Full Name"
//               name="name"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="">
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div style={{ display: 'flex', padding:"5px" }}>
//             <input
//               type="text"
//               placeholder="Country"
//               name="country"
//               id="country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
            
//             />
//             <input
//               type="text"
//               placeholder="State"
//               name="state"
//               id="state"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Pincode"
//               name="pincode"
//               id="pincode"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//             />

//           </div>
//           <p className="loginPara" style={{ fontSize: "17px", marginTop: "5px" }}>
//             By signing up, you agree to our Terms <br /> privacy policy and cookies policy.
//           </p>
//           <input type="submit" id="submitBtn" value="Sign Up" onClick={() => postData()} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {pl021_1,pl027_1} from '../assest/';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate();

  const notify = (msg) => {
    toast.error(msg);
  };
  const notifyB = (msg) => {
    toast.success(msg);
  };
  const postData = () => {
    fetch("http://localhost:8080/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        userName: username,
        password: password,
        country: country,
        state: state,
        pincode: pincode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notify(data.error);
        } else {
          notifyB(data.message);
          navigate("/signin");
        }
        console.log(data);
      });
  };

  return ( 

    <div className='w-full min-h-screen md:bg-[#c4d7cf] py-16'>
  <div className='bg-white md:max-w-[1280px] mx-auto grid md:gap-y-10 md:grid-cols-2 max-w-[600px] px-4 rounded-3xl'>
    <div className="relative flex justify-center items-center">
      <img src={pl021_1} alt='Image' className='absolute inset-0 w-full max-w-[300px] md:max-w-md blur-sm' /> 
      <img src={pl027_1} alt='Image' className='relative z-10 w-full max-w-[300px] md:max-w-md ml-14 py-[50px]' />
    </div>
    <div className='flex flex-col justify-center '>
      <h2 className='text-3xl font-semibold mb-5'>Let's Get Started.</h2>
      <input type="email" placeholder="Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md" /><br/>
      <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/><br/>
      <input type="text" placeholder="Full Name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/><br/>
      <input type="text" placeholder="Username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/><br/>
      <div style={{ display: 'flex', padding:"5px" }}>
        <input type="text" placeholder="Country" name="country" id="country" value={country} onChange={(e) => setCountry(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/>
        <input type="text" placeholder="State" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/>
        <input type="text" placeholder="Pincode" name="district" id="district" value={pincode} onChange={(e) => setPincode(e.target.value)} className=" bg-white border max-w-[500px] p-4 input-box-shadow rounded-md"/>
      </div>
      <p className='loginPara' style={{ fontSize: "17px", marginTop: "5px" }}>
        By signing up, you agree to our Terms <br /> privacy policy and cookies policy.
      </p>
      <input type="submit" value="Sign Up" className="btn-login bg-[#20b486] text-white rounded hover:bg-[#20b43c] px-4 py-2 mt-4 transition-colors duration-300 max-w-[500px]" onClick={() => postData()} />
    </div>
  </div>
</div>
  );
};

export default SignUp;
