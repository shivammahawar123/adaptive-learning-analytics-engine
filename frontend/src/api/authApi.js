import api from "./axios"

/*
|--------------------------------------------------------------------------
| REGISTER USER
|--------------------------------------------------------------------------
*/

export const registerUser = async (userData) => {

  const response = await api.post(

    "/users/register",

    userData
  )

  return response.data
}

/*
|--------------------------------------------------------------------------
| LOGIN USER
|--------------------------------------------------------------------------
*/

export const loginUser = async (userData) => {

  const response = await api.post(

    "/users/login",

    userData
  )

  return response.data
}

/*
|--------------------------------------------------------------------------
| GET CURRENT USER PROFILE
|--------------------------------------------------------------------------
*/

export const getProfile = async () => {

  const response = await api.get(

    "/users/profile"
  )

  return response.data
}