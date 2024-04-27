import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  const {id,name,job,image,text,nextPerson,previousPerson,randomPerson}=props;
  return <>
   <div className='container'>
    <div className='review'>
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
      </div>
      <div className="author">{name}</div>
      <div className="job">{job}</div>
      <p>{text}</p>
      <div>
         <button className='prev-btn' onClick={()=>previousPerson(id)}>{`<`}</button>
         {console.log(`Id is ${id}`)}
         <button className='next-btn' onClick={()=>nextPerson(id)}>{`>`}</button>
      </div>
      <button className="random-btn" onClick={()=>randomPerson(id)}>Random</button>
    </div>
   </div>
  
  </>
};

export default Review;
