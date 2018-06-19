import React, { Component } from 'react'
import Spinner from 'components/Spinner'

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

  render() {
    const { loading, facilities } = this.state
    return (
      <div className='FacilityList'>
        {loading ? (
          <Spinner />
        ) : (
          <div  className='FacilityList-content'>
            {facilities.map(facility => console.log(facility))}
          </div>
        )}
      </div>
    )
  }
}

export default FacilityList
