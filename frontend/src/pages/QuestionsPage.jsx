import MainLayout from "../layouts/MainLayout"

function QuestionsPage() {

  const questions = [

    {
      title: "What is the difference between INNER JOIN and LEFT JOIN?",
      difficulty: "Medium",
      subject: "SQL",
      xp: 25
    },

    {
      title: "Explain Python lists vs tuples with examples.",
      difficulty: "Easy",
      subject: "Python",
      xp: 15
    },

    {
      title: "How does DAX CALCULATE function work in Power BI?",
      difficulty: "Hard",
      subject: "Power BI",
      xp: 40
    },

    {
      title: "Explain normalization and denormalization.",
      difficulty: "Medium",
      subject: "Database",
      xp: 20
    }

  ]

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Practice Questions
        </h1>

        <p className="text-slate-400 text-sm">
          Solve adaptive AI-generated questions across multiple subjects.
        </p>

      </div>

      {/* FILTERS */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* SUBJECT */}

          <select
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option>
              All Subjects
            </option>

            <option>
              SQL
            </option>

            <option>
              Python
            </option>

            <option>
              Power BI
            </option>

            <option>
              Statistics
            </option>

          </select>

          {/* DIFFICULTY */}

          <select
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option>
              All Difficulty
            </option>

            <option>
              Easy
            </option>

            <option>
              Medium
            </option>

            <option>
              Hard
            </option>

          </select>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search questions..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* BUTTON */}

          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl text-sm font-medium"
          >

            Apply Filters

          </button>

        </div>

      </div>

      {/* QUESTION LIST */}

      <div className="space-y-4">

        {
          questions.map((question, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-4">

                <div>

                  <div className="flex items-center gap-2 mb-2">

                    <span className="bg-slate-800 px-3 py-1 rounded-lg text-xs text-slate-300">

                      {question.subject}

                    </span>

                    <span
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium
                        ${
                          question.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : question.difficulty === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }
                      `}
                    >

                      {question.difficulty}

                    </span>

                  </div>

                  <h2 className="text-lg font-semibold leading-7">

                    {question.title}

                  </h2>

                </div>

                {/* XP */}

                <div className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap">

                  +{question.xp} XP

                </div>

              </div>

              {/* ACTIONS */}

              <div className="flex items-center gap-3">

                <button
                  className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl text-sm font-medium"
                >

                  Solve Question

                </button>

                <button
                  className="bg-slate-800 hover:bg-slate-700 transition-all px-5 py-2 rounded-xl text-sm"
                >

                  View Solution

                </button>

              </div>

            </div>
          ))
        }

      </div>

    </MainLayout>
  )
}

export default QuestionsPage