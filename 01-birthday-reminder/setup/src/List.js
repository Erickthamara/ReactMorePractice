import React from 'react';

const List = (props) => {
  const {id,image,Name,age}=props
  return (
    <>
    
    <div className='person' key={id}>
      <img src={image} alt="" />
      <h4>{Name}</h4>
    <p>{age}</p>
            </div>
      </>
  );
};

export default List;