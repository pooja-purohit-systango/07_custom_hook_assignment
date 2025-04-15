import React from 'react'



const useIsDesktop = (width) => {
  return (
    width>=550 ? true : false
  )
}

export default useIsDesktop;