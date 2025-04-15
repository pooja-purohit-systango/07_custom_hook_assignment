import React from 'react'

const useIsmobile = (width) => {
  return (
    width<=350 ? true : false
  )
}

export default useIsmobile