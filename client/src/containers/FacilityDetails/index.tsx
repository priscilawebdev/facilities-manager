import React from 'react'
import { bm, be } from 'utils/bem'

interface IFacilityDetailsProps {
  id: number
}

const FacilityDetails: React.SFC<IFacilityDetailsProps> = ({ id }) => {
  return (
    <div className={bm('FacilityDetails')}>
      <h2 className={be('FacilityDetails', 'title')}>oi</h2>
      <div className={be('FacilityDetails', 'content')}>
        <p className={be('FacilityDetails', 'item')}>
          <strong>Created at:</strong>
          {id}
        </p>
        <p className={be('FacilityDetails', 'item')}>
          <strong>Number of courts:</strong>
          {id}
        </p>
        <p className={be('FacilityDetails', 'item')}>
          <strong>Address:</strong>
          {id}
        </p>
      </div>
    </div>
  )
}

export default FacilityDetails
