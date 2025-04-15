import React from 'react'

const useIsTablet = (width) => {
  return (
    width>350 && width<=550 ? true : false
  )
}

export default useIsTablet;