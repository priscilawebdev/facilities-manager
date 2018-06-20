import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'

import Spinner from 'components/Spinner'
import Card from 'components/Card'
import { bm, be } from 'utils/bem'

interface IFacilities {
  id: number
  name: string
  street: string
  zip: number
  city: string
  createdAt: string
  courts: ICourt[]
}

interface ICourt {
  id: number
  name: string
}

interface IFacilityListState {
  loading: boolean
  facilities: IFacilities[]
}

interface IFacilityListProps {
  history: History
}

class FacilityList extends Component<IFacilityListProps, IFacilityListState> {
  state: IFacilityListState = {
    loading: false,
    facilities: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/facilities')
      .then(res => res.json())
      .then(facilities => this.setState({ facilities }))
  }

  render() {
    const { loading, facilities } = this.state
    return (
      <div className={bm('FacilityList')}>
        <h1  className={be('FacilityList', 'title')}>Facilities Manager</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div  className={be('FacilityList', 'content')}>
            {facilities.map(facility => (
              <Card
                key={facility.id}
                id={facility.id}
                courtsN={facility.courts.length}
                {...facility}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(FacilityList as any)
