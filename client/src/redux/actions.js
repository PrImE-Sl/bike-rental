import axios from "axios"

import { GET_BIKES, DELETE_BIKE, CREATE_BIKE, RENT_BIKE } from "./types"

export const getBikes = () => async (dispatch) => {
  await axios
    .get("/api/bikes")
    .then((res) => dispatch({ type: GET_BIKES, payload: res.data }))
    .catch((error) => {
      console.log("get error: ", error)
    })
}

export const deleteBike = (id) => (dispatch) => {
  axios
    .delete(`/api/bikes/${id}`)
    .then((res) =>
      dispatch({ type: DELETE_BIKE, payload: id, })
    )
    .catch((error) => {
      console.log("delete error: ", error)
    })
}

export const createBike = (bike) => (dispatch) => {
  axios
    .post("/api/bikes", bike)
    .then((res) =>
      dispatch({ type: CREATE_BIKE, payload: res.data, })
    )
    .catch((error) => {
      console.log("create error: ", error)
    })
}

export const rentBike = (id, bike) => {
  return (dispatch) => {
    axios.put(`/api/bikes/${id}`, { bike })
      .then((res) =>
        dispatch({ type: RENT_BIKE, payload: id })
      )
  }
}

