import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

function RegisterPage() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    first_name: "",

    last_name: "",

    username: "",

    email: "",

    mobile: "",

    country: "",

    role: "Student",

    password: "",

    confirm_password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {

    e.preventDefault()

    if (
      formData.password !==
      formData.confirm_password
    ) {

      alert("Passwords do not match")

      return
    }

    try {

      setLoading(true)

      // FUTURE BACKEND API

      console.log(formData)

      setTimeout(() => {

        navigate("/")

      }, 1000)

    } catch (error) {

      console.log(error)

      alert("Registration Failed")

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        {/* LEFT PANEL */}

        <div className="hidden lg:flex flex-col justify-between bg-blue-600 p-8">

          <div>

            <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium mb-6">

              AI-Powered Learning Platform

            </div>

            <h1 className="text-4xl font-bold leading-tight mb-6">

              Create Your
              <br />
              Candidate
              <br />
              Account

            </h1>

            <p className="text-blue-100 leading-8 text-sm">

              Join the AI Data Analyst Engine to track learning progress, solve adaptive questions, analyze weak areas, and accelerate analytics mastery.

            </p>

          </div>

          {/* FEATURES */}

          <div className="space-y-3 mt-10">

            <div className="bg-white/10 rounded-xl p-4 text-sm">

              AI-based learning recommendations

            </div>

            <div className="bg-white/10 rounded-xl p-4 text-sm">

              Analytics performance tracking

            </div>

            <div className="bg-white/10 rounded-xl p-4 text-sm">

              Personalized roadmap progression

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="p-6 lg:p-8 overflow-y-auto">

          {/* HEADER */}

          <div className="mb-6">

            <h2 className="text-2xl font-semibold mb-1">
              Register Account
            </h2>

            <p className="text-slate-400 text-sm">
              Create your learning profile and begin your journey.
            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            {/* NAME */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  First Name
                </label>

                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Last Name
                </label>

                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* USERNAME */}

            <div>

              <label className="block text-sm mb-2 text-slate-300">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Unique username"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* EMAIL + MOBILE */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* COUNTRY + ROLE */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Candidate Type
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option>
                    Student
                  </option>

                  <option>
                    Professional
                  </option>

                  <option>
                    Career Switcher
                  </option>

                </select>

              </div>

            </div>

            {/* PASSWORD */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-xl text-sm font-medium disabled:opacity-70"
            >

              {
                loading
                  ? "Creating Account..."
                  : "Create Account"
              }

            </button>

          </form>

          {/* FOOTER */}

          <div className="mt-6 flex items-center justify-between text-sm">

            <Link
              to="/"
              className="text-blue-400 hover:text-blue-300"
            >
              Already have an account?
            </Link>

            <Link
              to="/support"
              className="text-slate-400 hover:text-white"
            >
              Need Help?
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default RegisterPage