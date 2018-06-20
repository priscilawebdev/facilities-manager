import { Reducer } from 'redux'

export interface IFacilities {
  id: number
  name: string
  street: string
  zip: number
  city: string
  createdAt: string
  courts: ICourt[]
}

interface IState {
  facilities: IFacilities[]
}

interface ICourt {
  id: number
  name: string
}

const InitialState = {
  facilities: []
}

export const actions = {
  LOAD_DATA: 'LOAD_DATA',
  loadData: (data: IFacilities[]) => ({
    type: actions.LOAD_DATA,
    data
  })
}

const reducer: Reducer<IState> = (state: IState = InitialState, { type, data }) => {
  switch (type) {
    case actions.LOAD_DATA:
      return {
        ...state,
        facilities: data
      }
    default:
      return state
  }
}

export default reducer
