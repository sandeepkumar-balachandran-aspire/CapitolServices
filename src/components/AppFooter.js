import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <h6>Capitol Services</h6>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
