import MainLayout from "../layouts/MainLayout"

function AnalyticsPage() {

  const subjectStats = [

    {
      name: "SQL",
      progress: 82
    },

    {
      name: "Python",
      progress: 61
    },

    {
      name: "Power BI",
      progress: 48
    },

    {
      name: "Excel",
      progress: 68
    }

  ]

  const weeklyStats = [

    {
      day: "Mon",
      value: 30
    },

    {
      day: "Tue",
      value: 45
    },

    {
      day: "Wed",
      value: 40
    },

    {
      day: "Thu",
      value: 60
    },

    {
      day: "Fri",
      value: 55
    },

    {
      day: "Sat",
      value: 72
    },

    {
      day: "Sun",
      value: 88
    }

  ]

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Performance Analytics
        </h1>

        <p className="text-slate-400 text-sm">
          Analyze learning trends, subject mastery, and progression metrics.
        </p>

      </div>

      {/* KPI ROW */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Total Questions
          </p>

          <h2 className="text-2xl font-bold">
            248
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Accuracy Rate
          </p>

          <h2 className="text-2xl font-bold">
            74%
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Avg Response Time
          </p>

          <h2 className="text-2xl font-bold">
            42s
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Weekly Growth
          </p>

          <h2 className="text-2xl font-bold">
            +18%
          </h2>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">

        {/* WEEKLY GRAPH */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              Weekly Progress
            </h2>

            <p className="text-slate-400 text-xs">
              Learning activity over the last 7 days
            </p>

          </div>

          {/* GRAPH */}

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 h-[240px]">

            <div className="relative h-full">

              {/* Y AXIS */}

              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-500">

                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>

              </div>

              {/* GRAPH */}

              <div className="ml-8 h-full flex flex-col justify-between">

                <div className="flex-1 relative border-l border-b border-slate-700">

                  <div className="absolute top-[25%] left-0 right-0 border-t border-slate-800"></div>

                  <div className="absolute top-[50%] left-0 right-0 border-t border-slate-800"></div>

                  <div className="absolute top-[75%] left-0 right-0 border-t border-slate-800"></div>

                  <svg
                    viewBox="0 0 600 220"
                    className="absolute inset-0 w-full h-full"
                  >

                    <polyline
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="4"
                      points="
                        20,170
                        100,140
                        180,150
                        260,110
                        340,120
                        420,70
                        520,35
                      "
                    />

                    <circle cx="20" cy="170" r="5" fill="#2563eb" />
                    <circle cx="100" cy="140" r="5" fill="#2563eb" />
                    <circle cx="180" cy="150" r="5" fill="#2563eb" />
                    <circle cx="260" cy="110" r="5" fill="#2563eb" />
                    <circle cx="340" cy="120" r="5" fill="#2563eb" />
                    <circle cx="420" cy="70" r="5" fill="#2563eb" />
                    <circle cx="520" cy="35" r="5" fill="#2563eb" />

                  </svg>

                </div>

                {/* X AXIS */}

                <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-2">

                  {
                    weeklyStats.map((item, index) => (

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

        {/* SUBJECT BREAKDOWN */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="mb-4">

            <h2 className="text-lg font-semibold mb-1">
              Subject Breakdown
            </h2>

            <p className="text-slate-400 text-xs">
              Performance distribution across subjects
            </p>

          </div>

          <div className="space-y-4">

            {
              subjectStats.map((subject, index) => (

                <div
                  key={index}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4"
                >

                  <div className="flex items-center justify-between mb-3">

                    <h3 className="text-sm font-semibold">

                      {subject.name}

                    </h3>

                    <span className="text-xs text-blue-400 font-semibold">

                      {subject.progress}%

                    </span>

                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-2">

                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${subject.progress}%`
                      }}
                    ></div>

                  </div>

                </div>
              ))
            }

          </div>

        </div>

      </div>

      {/* INSIGHTS */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            AI Performance Insights
          </h2>

          <p className="text-slate-400 text-xs">
            AI-generated observations based on recent learning patterns
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-green-400 text-xs font-semibold mb-2">
              STRENGTH
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Strong SQL Progression
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Consistent accuracy improvement in joins and aggregations.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-yellow-400 text-xs font-semibold mb-2">
              FOCUS AREA
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Power BI DAX
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Practice advanced DAX formulas and dashboard optimization.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-blue-400 text-xs font-semibold mb-2">
              RECOMMENDATION
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Continue Daily Practice
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Maintaining streak consistency will accelerate mastery progression.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default AnalyticsPage