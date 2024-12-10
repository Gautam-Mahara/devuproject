import React from 'react';
import './Collection.css'; 

const Collection = () => {
  return (
    <div className="backColor">
      <h2 className='colo'>Exciting Collection</h2>
      <h3 className='colo'>Curated specially for you</h3>

      <div className="row">
        <div className="col">
          <img src="colimg1.jpg" alt="Image 1" />
        </div>
        <div className="col">
          <img src="colimg2.jpg" alt="Image 2" />
        </div>
        <div className="col">
          <img src="colimg3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
