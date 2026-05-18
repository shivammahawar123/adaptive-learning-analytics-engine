import { useState } from "react"

import MainLayout from "../layouts/MainLayout"

function SupportPage() {

  const [ticketData, setTicketData] = useState({

    subject: "",

    category: "Technical Issue",

    priority: "Medium",

    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setTicketData({

      ...ticketData,

      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      // FUTURE BACKEND API

      console.log(ticketData)

      setTimeout(() => {

        alert(
          "Support ticket submitted successfully."
        )

      }, 1000)

    } catch (error) {

      console.log(error)

      alert(
        "Failed to submit ticket."
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Help & Support
        </h1>

        <p className="text-slate-400 text-sm">
          Raise support tickets, report issues, and contact platform assistance.
        </p>

      </div>

      {/* TOP GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">

        {/* QUICK HELP */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <h2 className="text-lg font-semibold mb-4">
            Quick Help
          </h2>

          <div className="space-y-3">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                Login Problems
              </h3>

              <p className="text-slate-400 text-xs leading-6">
                Issues related to password, login access, or account recovery.
              </p>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                Dashboard Errors
              </h3>

              <p className="text-slate-400 text-xs leading-6">
                UI bugs, graph issues, loading failures, or broken pages.
              </p>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                Learning Issues
              </h3>

              <p className="text-slate-400 text-xs leading-6">
                Problems related to roadmap, XP, ranks, or analytics tracking.
              </p>

            </div>

          </div>

        </div>

        {/* TICKET FORM */}

        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              Raise Support Ticket
            </h2>

            <p className="text-slate-400 text-xs">
              Submit detailed issue reports for faster resolution.
            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* SUBJECT */}

            <div>

              <label className="block text-sm mb-2 text-slate-300">
                Ticket Subject
              </label>

              <input
                type="text"
                name="subject"
                value={ticketData.subject}
                onChange={handleChange}
                placeholder="Enter ticket subject"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* CATEGORY + PRIORITY */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* CATEGORY */}

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Category
                </label>

                <select
                  name="category"
                  value={ticketData.category}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option>
                    Technical Issue
                  </option>

                  <option>
                    Account Problem
                  </option>

                  <option>
                    Learning Issue
                  </option>

                  <option>
                    Dashboard Bug
                  </option>

                  <option>
                    Payment Issue
                  </option>

                </select>

              </div>

              {/* PRIORITY */}

              <div>

                <label className="block text-sm mb-2 text-slate-300">
                  Priority
                </label>

                <select
                  name="priority"
                  value={ticketData.priority}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option>
                    Low
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    High
                  </option>

                  <option>
                    Critical
                  </option>

                </select>

              </div>

            </div>

            {/* MESSAGE */}

            <div>

              <label className="block text-sm mb-2 text-slate-300">
                Issue Description
              </label>

              <textarea
                rows="7"
                name="message"
                value={ticketData.message}
                onChange={handleChange}
                placeholder="Describe your issue in detail..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-3 rounded-xl text-sm font-medium disabled:opacity-70"
            >

              {
                loading
                  ? "Submitting Ticket..."
                  : "Submit Ticket"
              }

            </button>

          </form>

        </div>

      </div>

      {/* FAQ */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-xs">
            Common platform questions and quick solutions
          </p>

        </div>

        <div className="space-y-3">

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              How are XP points calculated?
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              XP is awarded based on question difficulty, consistency, accuracy, and roadmap progression.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              How are ranks determined?
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Ranks are calculated using total XP, mastery progression, learning streaks, and analytics performance.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              Can roadmap recommendations change?
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Yes. AI dynamically updates roadmap recommendations based on learning behavior and weak areas.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default SupportPage