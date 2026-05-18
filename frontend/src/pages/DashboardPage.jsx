import MainLayout from "../layouts/MainLayout"

function DashboardPage() {

  const subjects = [

    {
      name: "SQL",
      progress: 82,
      description:
        "Excellent performance in queries and joins."
    },

    {
      name: "Excel",
      progress: 68,
      description:
        "Good understanding of functions and analysis."
    },

    {
      name: "Python",
      progress: 61,
      description:
        "Focus on Python libraries and workflows."
    },

    {
      name: "Power BI",
      progress: 48,
      description:
        "Practice dashboards and visual analytics."
    },

    {
      name: "Statistics",
      progress: 55,
      description:
        "Strengthen statistical concepts."
    },

    {
      name: "Data Interpretation",
      progress: 72,
      description:
        "Good at deriving insights from data."
    }

  ]

  const graphData = [

    { day: "Mon", value: 20 },

    { day: "Tue", value: 35 },

    { day: "Wed", value: 30 },

    { day: "Thu", value: 55 },

    { day: "Fri", value: 48 },

    { day: "Sat", value: 72 },

    { day: "Sun", value: 88 }

  ]

  return (

    <MainLayout>

      {/* KPI ROW */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Training Day
          </p>

          <h2 className="text-2xl font-bold">
            47
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Total XP
          </p>

          <h2 className="text-2xl font-bold">
            1240
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Current Tier
          </p>

          <h2 className="text-2xl font-bold">
            Elite
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Current Streak
          </p>

          <h2 className="text-2xl font-bold">
            12 Days
          </h2>

        </div>

      </div>

      {/* TOP GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">

        {/* GRAPH */}

        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="flex items-center justify-between mb-3">

            <div>

              <h2 className="text-lg font-semibold mb-1">
                Progress Over Time
              </h2>

              <p className="text-slate-400 text-xs">
                Weekly learning progression
              </p>

            </div>

            <button className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-xl text-xs">

              Last 7 Days

            </button>

          </div>

          {/* GRAPH */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 h-[250px]">

            <div className="relative h-full">

              {/* Y AXIS */}

              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-500">

                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>

              </div>

              {/* GRAPH AREA */}

              <div className="ml-8 h-full flex flex-col justify-between">

                {/* MAIN GRAPH */}

                <div className="flex-1 relative border-l border-b border-slate-700">

                  {/* GRID LINES */}

                  <div className="absolute top-[25%] left-0 right-0 border-t border-slate-800"></div>

                  <div className="absolute top-[50%] left-0 right-0 border-t border-slate-800"></div>

                  <div className="absolute top-[75%] left-0 right-0 border-t border-slate-800"></div>

                  {/* SVG */}

                  <svg
                    viewBox="0 0 600 220"
                    className="absolute inset-0 w-full h-full"
                  >

                    <polyline
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      points="
                        20,180
                        100,150
                        180,160
                        260,110
                        340,125
                        420,70
                        520,35
                      "
                    />

                    <circle cx="20" cy="180" r="5" fill="#2563eb" />
                    <circle cx="100" cy="150" r="5" fill="#2563eb" />
                    <circle cx="180" cy="160" r="5" fill="#2563eb" />
                    <circle cx="260" cy="110" r="5" fill="#2563eb" />
                    <circle cx="340" cy="125" r="5" fill="#2563eb" />
                    <circle cx="420" cy="70" r="5" fill="#2563eb" />
                    <circle cx="520" cy="35" r="5" fill="#2563eb" />

                  </svg>

                </div>

                {/* X AXIS */}

                <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-2">

                  {
                    graphData.map((item, index) => (

                      <span key={index}>
                        {item.day}
                      </span>
                    ))
                  }

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RANK SECTION */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              Rank Progression
            </h2>

            <p className="text-slate-400 text-xs">
              XP-based advancement system
            </p>

          </div>

          <div className="space-y-2">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex justify-between">

              <div>

                <h3 className="text-sm font-semibold">
                  Beginner
                </h3>

                <p className="text-[10px] text-slate-400">
                  0 – 499 XP
                </p>

              </div>

              <span className="text-green-400 text-xs">
                Completed
              </span>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex justify-between">

              <div>

                <h3 className="text-sm font-semibold">
                  Intermediate
                </h3>

                <p className="text-[10px] text-slate-400">
                  500 – 999 XP
                </p>

              </div>

              <span className="text-green-400 text-xs">
                Completed
              </span>

            </div>

            <div className="bg-blue-600 rounded-xl p-3 flex justify-between">

              <div>

                <h3 className="text-sm font-semibold">
                  Elite
                </h3>

                <p className="text-[10px] text-blue-100">
                  Current Tier
                </p>

              </div>

              <span className="bg-white/20 px-2 py-1 rounded-lg text-[10px]">
                Active
              </span>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex justify-between">

              <div>

                <h3 className="text-sm font-semibold">
                  Master
                </h3>

                <p className="text-[10px] text-slate-400">
                  2500+ XP
                </p>

              </div>

              <span className="text-slate-500 text-xs">
                Locked
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* SUBJECT PERFORMANCE */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            Subject Performance
          </h2>

          <p className="text-slate-400 text-xs">
            Subject-wise mastery and analytics progression
          </p>

        </div>

        {/* HORIZONTAL STRIP */}

        <div className="grid grid-cols-6 gap-3">

          {
            subjects.map((subject, index) => (

              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl p-3"
              >

                <div className="flex justify-between mb-2">

                  <h3 className="text-sm font-semibold">

                    {subject.name}

                  </h3>

                  <span className="text-[11px] text-blue-400 font-semibold">

                    {subject.progress}%

                  </span>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-2 mb-3">

                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${subject.progress}%`
                    }}
                  ></div>

                </div>

                <p
                  className={`
                    text-[10px] font-semibold mb-2
                    ${
                      subject.progress >= 75
                        ? "text-green-400"
                        : subject.progress >= 60
                        ? "text-blue-400"
                        : subject.progress >= 50
                        ? "text-yellow-400"
                        : "text-red-400"
                    }
                  `}
                >

                  {
                    subject.progress >= 75
                      ? "Strong"
                      : subject.progress >= 60
                      ? "Good"
                      : subject.progress >= 50
                      ? "Average"
                      : "Needs Improvement"
                  }

                </p>

                <p className="text-[10px] text-slate-400 leading-4">

                  {subject.description}

                </p>

              </div>
            ))
          }

        </div>

      </div>

      {/* BOTTOM GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* ROADMAP */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              Recommended Learning Path
            </h2>

            <p className="text-slate-400 text-xs">
              Personalized next steps
            </p>

          </div>

          <div className="space-y-2">

            <div className="bg-blue-600 rounded-xl p-4">

              <p className="text-blue-100 text-[10px] mb-1">
                CURRENT FOCUS
              </p>

              <h3 className="text-sm font-semibold">
                SQL JOINS
              </h3>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">

              Window Functions

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">

              Power BI Dashboards

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">

              Statistics Foundations

            </div>

          </div>

        </div>

        {/* AI TUTOR */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              AI Tutor Assistant
            </h2>

            <p className="text-slate-400 text-xs">
              Ask analytics and interview doubts
            </p>

          </div>

          <textarea
            rows="5"
            placeholder="Type your question here..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="mt-3 bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl font-medium text-sm"
          >
            Ask AI Tutor
          </button>

        </div>

      </div>

    </MainLayout>
  )
}

export default DashboardPage