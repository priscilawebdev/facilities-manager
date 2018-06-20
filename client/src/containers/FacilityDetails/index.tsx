import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bm, be } from 'utils/bem'
import { IFacilities } from 'ducks/facility'

interface IFacilityDetailsProps {
  id: string
  facilities: IFacilities[]
}

const FacilityDetails: React.SFC<IFacilityDetailsProps> = ({ id, facilities }) => (
  <div className={bm('FacilityDetails')}>
    {facilities && facilities.filter(facility => facility.id.toString() === id).map(facility => (
      <React.Fragment key={facility.id}>
        <div className={bm('FacilityDetails-header')}>
          <Link className={be('FacilityDetails', 'button')} to='/'>Back to the list</Link>
        </div>
        <div className={be('FacilityDetails', 'content')}>
          <div className={be('FacilityDetails', 'title')}>{facility.name}</div>
          <p className={be('FacilityDetails', 'item')}>
            <strong>Created at: </strong>
            {facility.createdAt}
          </p>
          <p className={be('FacilityDetails', 'item')}>
            <strong>Number of courts: </strong>
            {facility.courts.length}
          </p>
          <p className={be('FacilityDetails', 'item')}>
            <strong>Address: </strong>
            {` ${facility.street}, ${facility.city} - ${facility.zip}`}
          </p>
        </div>
      </React.Fragment>
    ))}
  </div>
)

const mapStateToProps = (state: { facility: { facilities: IFacilities[] } }) => ({
  facilities: state.facility.facilities
})

export default connect(mapStateToProps)(FacilityDetails)
