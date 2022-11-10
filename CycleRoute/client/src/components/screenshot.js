import React, { createRef, useState } from 'react';
import { useScreenshot } from 'use-react-screenshot';

const width = {
  width: '300',
  length: '100%'
}
function Screenshot() {
  const ref = createRef(null);


  const [image, takeScreenshot] = useScreenshot();


  //onClick event for Button to take the screenshot
  const getImage = () => takeScreenshot(ref.current);

  return (
    <div>
      <div>
        <button onClick={getImage}>
          Like
        </button>
      </div>
      <img src={image} alt={'Screenshot'} width={width} />

      <div ref={ref}>
        <p><img src='https://geology.com/world/world-map-360.gif' alt="test-img" /></p>
        <h2>This is a sample screenshot.</h2>

      </div>
    </div>
  )
}

export default Screenshot
