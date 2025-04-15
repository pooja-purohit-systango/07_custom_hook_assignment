import React from 'react'
import { useState, useEffect } from 'react';

const useWindowWidth = () => {

     const [width, setWidth] = useState(window.innerWidth);
    
        useEffect(() => {
            window.addEventListener("resize", function () {
                setWidth(window.innerWidth)
            })
        },[]);

  return (
    width
  )
}

export default useWindowWidth