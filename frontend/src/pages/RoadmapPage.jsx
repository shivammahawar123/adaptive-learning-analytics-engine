import MainLayout from "../layouts/MainLayout"

function RoadmapPage() {

  const roadmap = [

    {
      phase: "Phase 1",
      title: "Programming Fundamentals",
      progress: 100,
      status: "Completed"
    },

    {
      phase: "Phase 2",
      title: "Python Basics",
      progress: 100,
      status: "Completed"
    },

    {
      phase: "Phase 3",
      title: "Control Flow",
      progress: 100,
      status: "Completed"
    },

    {
      phase: "Phase 4",
      title: "Loops + Git",
      progress: 100,
      status: "Completed"
    },

    {
      phase: "Phase 5",
      title: "Data Structures + SQL",
      progress: 82,
      status: "In Progress"
    },

    {
      phase: "Phase 6",
      title: "Functions + GitHub",
      progress: 0,
      status: "Locked"
    },

    {
      phase: "Phase 7",
      title: "Strings + Excel",
      progress: 0,
      status: "Locked"
    }

  ]

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Learning Roadmap
        </h1>

        <p className="text-slate-400 text-sm">
          Track roadmap progression, mastery levels, and upcoming learning phases.
        </p>

      </div>

      {/* OVERVIEW */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Completed Phases
          </p>

          <h2 className="text-2xl font-bold">
            4
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Current Phase
          </p>

          <h2 className="text-2xl font-bold">
            5
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Overall Progress
          </p>

          <h2 className="text-2xl font-bold">
            41%
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Estimated Completion
          </p>

          <h2 className="text-lg font-semibold">
            7 Months
          </h2>

        </div>

      </div>

      {/* ROADMAP */}

      <div className="space-y-4 mb-4">

        {
          roadmap.map((item, index) => (

            <div
              key={index}
              className={`
                border rounded-2xl p-4
                ${
                  item.status === "In Progress"
                    ? "bg-blue-600/10 border-blue-500/40"
                    : "bg-slate-900 border-slate-800"
                }
              `}
            >

              {/* TOP */}

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">

                <div>

                  <div className="flex items-center gap-2 mb-2">

                    <span className="bg-slate-800 px-3 py-1 rounded-lg text-xs text-slate-300">

                      {item.phase}

                    </span>

                    <span
                      className={`
                        px-3 py-1 rounded-lg text-xs font-medium
                        ${
                          item.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : item.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-slate-700 text-slate-300"
                        }
                      `}
                    >

                      {item.status}

                    </span>

                  </div>

                  <h2 className="text-lg font-semibold">

                    {item.title}

                  </h2>

                </div>

                {/* PROGRESS */}

                <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">

                  <p className="text-slate-500 text-[10px] mb-1">
                    Progress
                  </p>

                  <h3 className="text-lg font-semibold">

                    {item.progress}%

                  </h3>

                </div>

              </div>

              {/* BAR */}

              <div className="mb-4">

                <div className="flex items-center justify-between mb-2">

                  <p className="text-xs text-slate-400">
                    Mastery Progress
                  </p>

                  <p className="text-xs text-slate-400">
                    {item.progress}%
                  </p>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">

                  <div
                    className={`
                      h-3 rounded-full
                      ${
                        item.status === "Completed"
                          ? "bg-green-500"
                          : item.status === "In Progress"
                          ? "bg-blue-500"
                          : "bg-slate-700"
                      }
                    `}
                    style={{
                      width: `${item.progress}%`
                    }}
                  ></div>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="flex items-center gap-3">

                <button
                  className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl text-sm font-medium"
                >

                  Continue Phase

                </button>

                <button
                  className="bg-slate-800 hover:bg-slate-700 transition-all px-5 py-2 rounded-xl text-sm"
                >

                  View Topics

                </button>

              </div>

            </div>
          ))
        }

      </div>

      {/* AI RECOMMENDATIONS */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            AI Roadmap Insights
          </h2>

          <p className="text-slate-400 text-xs">
            Personalized progression recommendations generated by AI
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-green-400 text-xs font-semibold mb-2">
              CURRENT STRENGTH
            </p>

            <h3 className="text-sm font-semibold mb-2">
              SQL Learning Speed
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Candidate is progressing faster than expected in SQL modules.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-yellow-400 text-xs font-semibold mb-2">
              RECOMMENDED FOCUS
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Practice DSA Basics
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Early DSA practice will strengthen future analytics workflows.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-blue-400 text-xs font-semibold mb-2">
              ESTIMATED READINESS
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Job Ready Progress
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Current learning consistency suggests strong future readiness.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default RoadmapPage