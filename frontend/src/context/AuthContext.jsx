import {

  createContext,

  useContext,

  useEffect,

  useState

} from "react"

import {

  getProfile

} from "../api/authApi"

const AuthContext = createContext()

export function AuthProvider({

  children

}) {

  const [user, setUser] = useState(null)

  const [loading, setLoading] =
    useState(true)

  /*
  |--------------------------------------------------------------------------
  | LOAD USER
  |--------------------------------------------------------------------------
  */

  const loadUser = async () => {

    try {

      const token =
        localStorage.getItem("token")

      if (!token) {

        setLoading(false)

        return
      }

      const profile =
        await getProfile()

      setUser(profile)

    } catch (error) {

      console.error(error)

      localStorage.removeItem("token")

      setUser(null)

    } finally {

      setLoading(false)
    }
  }

  /*
  |--------------------------------------------------------------------------
  | LOGIN
  |--------------------------------------------------------------------------
  */

  const login = (token, userData) => {

    localStorage.setItem(
      "token",
      token
    )

    setUser(userData)
  }

  /*
  |--------------------------------------------------------------------------
  | LOGOUT
  |--------------------------------------------------------------------------
  */

  const logout = () => {

    localStorage.removeItem("token")

    setUser(null)
  }

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {

    loadUser()

  }, [])

  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading
      }}
    >

      {children}

    </AuthContext.Provider>
  )
}

/*
|--------------------------------------------------------------------------
| CUSTOM HOOK
|--------------------------------------------------------------------------
*/

export function useAuth() {

  return useContext(AuthContext)
}