import React from 'react';
import loading from './loading-buffering.gif';

const Spinner = () => {
      return(
          <div className='text-center my-5'>
              <img style={{height: "5vh"}} src={loading} alt="loading" />
          </div>
      )
}

export default Spinner;
