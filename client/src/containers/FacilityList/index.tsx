import React, { Component } from 'react'
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

class FacilityList extends Component<{}, IFacilityListState> {
  state: IFacilityListState = {
    loading: false,
    facilities: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/facilities')
      .then(res => res.json())
      .then(facilities => this.setState({ facilities }))
  }

  handleDetail = () => {
    console.log('oioioii')
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
                courtsN={facility.courts.length}
                actionButton={this.handleDetail}
                {...facility}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default FacilityList
