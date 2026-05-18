import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import { loginUser } from "../api/authApi"

import { useAuth } from "../context/AuthContext"

function LoginPage() {

  const navigate = useNavigate()

  const { login } = useAuth()

  const [formData, setFormData] =
    useState({

      email: "",

      password: ""
    })

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    })
  }

  /*
  |--------------------------------------------------------------------------
  | HANDLE SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      setError("")

      const response =
        await loginUser(formData)

      login(

        response.access_token,

        response.user
      )

      navigate("/dashboard")

    } catch (error) {

      console.error(error)

      setError(

        error.response?.data?.detail ||

        "Login failed"
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT PANEL */}

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 to-slate-950 p-12">

          <div>

            <div className="flex items-center gap-3 mb-10">

              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-2xl">

                📊

              </div>

              <div>

                <h1 className="text-2xl font-bold text-white">

                  AI Data Analyst Engine

                </h1>

                <p className="text-blue-100 text-sm">

                  Adaptive AI-powered analytics learning
                </p>

              </div>

            </div>

            <h2 className="text-5xl font-bold leading-tight text-white mb-6">

              Welcome Back,
              Candidate
            </h2>

            <p className="text-blue-100 text-lg leading-8 max-w-lg">

              Continue your adaptive analytics training journey,
              strengthen weak areas, track progression, and
              unlock elite-level data analyst skills.
            </p>

          </div>

          {/* FEATURES */}

          <div className="grid grid-cols-2 gap-4 mt-16">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

              <h3 className="text-white font-semibold mb-2">

                AI Tutor

              </h3>

              <p className="text-blue-100 text-sm leading-6">

                Personalized guidance and adaptive learning.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

              <h3 className="text-white font-semibold mb-2">

                Smart Analytics

              </h3>

              <p className="text-blue-100 text-sm leading-6">

                Track progress and skill performance.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

              <h3 className="text-white font-semibold mb-2">

                XP System

              </h3>

              <p className="text-blue-100 text-sm leading-6">

                Gamified ranking and progression engine.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

              <h3 className="text-white font-semibold mb-2">

                Adaptive Roadmap

              </h3>

              <p className="text-blue-100 text-sm leading-6">

                Dynamic learning path based on performance.
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="flex items-center justify-center p-8 lg:p-14">

          <div className="w-full max-w-md">

            {/* MOBILE LOGO */}

            <div className="lg:hidden text-center mb-10">

              <h1 className="text-3xl font-bold mb-3">

                AI Data Analyst Engine

              </h1>

              <p className="text-slate-400">

                Continue your analytics learning journey.
              </p>

            </div>

            {/* HEADER */}

            <div className="mb-8">

              <h2 className="text-4xl font-bold mb-3">

                Sign In

              </h2>

              <p className="text-slate-400 text-sm leading-7">

                Access your dashboard, roadmap,
                analytics, and AI tutor assistant.
              </p>

            </div>

            {/* ERROR */}

            {
              error && (

                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl px-4 py-3 mb-6">

                  {error}

                </div>
              )
            }

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* EMAIL */}

              <div>

                <label className="block text-sm font-medium mb-2">

                  Email Address

                </label>

                <input

                  type="email"

                  name="email"

                  value={formData.email}

                  onChange={handleChange}

                  required

                  placeholder="Enter your email"

                  className="
                    w-full
                    bg-slate-950
                    border border-slate-700
                    rounded-2xl
                    px-5 py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    transition-all
                  "
                />

              </div>

              {/* PASSWORD */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="text-sm font-medium">

                    Password

                  </label>

                  <Link

                    to="/forgot-password"

                    className="
                      text-sm
                      text-blue-400
                      hover:text-blue-300
                      transition-all
                    "
                  >

                    Forgot Password?

                  </Link>

                </div>

                <input

                  type="password"

                  name="password"

                  value={formData.password}

                  onChange={handleChange}

                  required

                  placeholder="Enter your password"

                  className="
                    w-full
                    bg-slate-950
                    border border-slate-700
                    rounded-2xl
                    px-5 py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    transition-all
                  "
                />

              </div>

              {/* BUTTON */}

              <button

                type="submit"

                disabled={loading}

                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  transition-all
                  rounded-2xl
                  py-4
                  font-semibold
                  text-white
                  disabled:opacity-70
                  shadow-lg shadow-blue-600/20
                "
              >

                {
                  loading
                    ? "Signing In..."
                    : "Sign In"
                }

              </button>

            </form>

            {/* FOOTER */}

            <div className="mt-8 text-center">

              <p className="text-slate-400 text-sm">

                Don't have an account?{" "}

                <Link

                  to="/register"

                  className="
                    text-blue-400
                    hover:text-blue-300
                    font-medium
                    transition-all
                  "
                >

                  Create Account

                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginPage