import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, IFacilities } from 'ducks/facility'
import Spinner from 'components/Spinner'
import Card from 'components/Card'
import { bm, be } from 'utils/bem'

interface IFacilityListProps {
  facilities: IFacilities[]
  handleLoadData: (facilities: IFacilities[]) => { type: string; data: IFacilities[] }
}

class FacilityList extends Component<IFacilityListProps, {}> {

  componentDidMount() {
    const { handleLoadData } = this.props
    fetch('http://localhost:3000/api/facilities')
      .then(res => res.json())
      .then(facilities => {
        handleLoadData(facilities)
      })
  }

  render() {
    const { facilities } = this.props
    return (
      <div className={bm('FacilityList')}>
        <h1  className={be('FacilityList', 'title')}>Facilities Manager</h1>
        <div  className={be('FacilityList', 'content')}>
          {facilities.length > 0 ? (
            facilities.map(facility => (
              <Card
                key={facility.id}
                id={facility.id}
                courtsN={facility.courts.length}
                highlighted={facility.courts.length < 5}
                {...facility}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: { facility: IFacilities[] }) => ({
  ...state.facility
})

const mapDispatchToProps = {
  handleLoadData: actions.loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityList as any)
