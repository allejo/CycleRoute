import React, { createRef, useState } from 'react';
import { useScreenshot } from 'use-react-screenshot';

function Screenshot() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();

  const getImage = () => takeScreenshot(ref.current);

  return (
    <div>
      <div>
        <button onClick={getImage}>
          Like
        </button>
      </div>
      <img src={image} alt={'Screenshot'} />
      
      <div ref={ref}>

        <h2>Creating Screenshot by me.</h2>
      </div>
    </div>
  )
}

export default Screenshot
