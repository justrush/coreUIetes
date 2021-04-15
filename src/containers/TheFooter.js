import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="www.amazon.com" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; Author: Justin Rush </span>
      </div>
      <div className="mfs-auto">
        
        <span className="mr-1">Powered by</span>
        <a href="www.amazon.com" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
       
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
