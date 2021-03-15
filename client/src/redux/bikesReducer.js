import { GET_BIKES, DELETE_BIKE, RENT_BIKE, CREATE_BIKE } from "./types"

export const initialState = {
  bikes: []
}

export const bikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BIKE:
      return {
        ...state,
        bikes: [...state.bikes, action.payload]
      }
    case GET_BIKES:
      return {
        ...state,
        bikes: action.payload
      }
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter(bike => bike._id !== action.payload)
      }

    case RENT_BIKE:
      return {
        ...state,
        bikes: state.bikes.map((bike) =>
          bike._id === action.payload
            ? { ...bike, isRented: !bike.isRented }
            : bike
        )
      }

    default:
      return state
  }
}