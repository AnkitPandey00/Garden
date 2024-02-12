import React, { useState, useEffect } from 'react';
import './Ask.css';

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
    
  });

  const [submittedData, setSubmittedData] = useState(JSON.parse(localStorage.getItem('submittedData')) || []);

  useEffect(() => {
    localStorage.setItem('submittedData', JSON.stringify(submittedData));
    
  }, [submittedData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
     
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', email: '', question: '' });
    alert('Form submitted successfully!');
  };

  return (
    <div className='main-conat'>
      <h1 className='Ask_h1'>Ask Your Question</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <label htmlFor="">Ask Questions</label>
        <textarea name="question" value={formData.question} onChange={handleChange} placeholder="Question"></textarea>
        <button type="submit" className='btn-form'>Submit</button>
      </form>
      <h1 className='Ask_h1'>Your Asked Question</h1>
      {submittedData.map((data, index) => (
        <div key={index} className='response'>
         
          <h1 className='ans_name'><span>Name: </span>{data.name}</h1>
          <h2 className='ans_email'><span>Email: </span> {data.email}</h2>
          <p className='ans_ques'><span>Question: </span>{data.question}</p>
          <p className='p'>We Resolve Your Question Shortly and Contacts You By Your Email</p>
        </div>
      ))}
    </div>
  );
}

export default AskQuestion;