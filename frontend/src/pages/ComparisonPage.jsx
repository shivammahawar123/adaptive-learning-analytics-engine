import MainLayout from "../layouts/MainLayout"

function ComparisonPage() {

  const comparisonData = [

    {
      subject: "SQL",
      candidate: 82,
      average: 68
    },

    {
      subject: "Python",
      candidate: 61,
      average: 57
    },

    {
      subject: "Power BI",
      candidate: 48,
      average: 52
    },

    {
      subject: "Excel",
      candidate: 68,
      average: 63
    },

    {
      subject: "Statistics",
      candidate: 55,
      average: 49
    }

  ]

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Candidate Comparison
        </h1>

        <p className="text-slate-400 text-sm">
          Compare performance metrics against platform averages and other candidates.
        </p>

      </div>

      {/* TOP COMPARISON */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-4">

        {/* CANDIDATE */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="flex items-center justify-between mb-4">

            <div>

              <p className="text-slate-500 text-xs mb-1">
                Candidate
              </p>

              <h2 className="text-xl font-semibold">
                Candidate User
              </h2>

            </div>

            <div className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium">

              Elite Tier

            </div>

          </div>

          <div className="grid grid-cols-3 gap-3">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                XP
              </p>

              <h3 className="text-lg font-semibold">
                1240
              </h3>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                Accuracy
              </p>

              <h3 className="text-lg font-semibold">
                74%
              </h3>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                Rank
              </p>

              <h3 className="text-lg font-semibold">
                #18
              </h3>

            </div>

          </div>

        </div>

        {/* PLATFORM AVERAGE */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="flex items-center justify-between mb-4">

            <div>

              <p className="text-slate-500 text-xs mb-1">
                Platform Average
              </p>

              <h2 className="text-xl font-semibold">
                Global Candidates
              </h2>

            </div>

            <div className="bg-slate-800 px-4 py-2 rounded-xl text-sm font-medium">

              Average Tier

            </div>

          </div>

          <div className="grid grid-cols-3 gap-3">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                Avg XP
              </p>

              <h3 className="text-lg font-semibold">
                940
              </h3>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                Avg Accuracy
              </p>

              <h3 className="text-lg font-semibold">
                61%
              </h3>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

              <p className="text-slate-500 text-[10px] mb-1">
                Avg Rank
              </p>

              <h3 className="text-lg font-semibold">
                #57
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* SUBJECT COMPARISON */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            Subject Comparison
          </h2>

          <p className="text-slate-400 text-xs">
            Compare subject-wise performance against platform averages
          </p>

        </div>

        <div className="space-y-4">

          {
            comparisonData.map((item, index) => (

              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-xl p-4"
              >

                {/* TOP */}

                <div className="flex items-center justify-between mb-3">

                  <h3 className="text-sm font-semibold">

                    {item.subject}

                  </h3>

                  <div className="flex items-center gap-4 text-xs">

                    <span className="text-blue-400 font-medium">

                      Candidate: {item.candidate}%

                    </span>

                    <span className="text-slate-400">

                      Average: {item.average}%

                    </span>

                  </div>

                </div>

                {/* BARS */}

                <div className="space-y-3">

                  {/* CANDIDATE */}

                  <div>

                    <div className="flex items-center justify-between mb-1">

                      <p className="text-[10px] text-slate-500">
                        Candidate
                      </p>

                      <p className="text-[10px] text-blue-400">
                        {item.candidate}%
                      </p>

                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-2">

                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${item.candidate}%`
                        }}
                      ></div>

                    </div>

                  </div>

                  {/* AVERAGE */}

                  <div>

                    <div className="flex items-center justify-between mb-1">

                      <p className="text-[10px] text-slate-500">
                        Platform Average
                      </p>

                      <p className="text-[10px] text-slate-400">
                        {item.average}%
                      </p>

                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-2">

                      <div
                        className="bg-slate-500 h-2 rounded-full"
                        style={{
                          width: `${item.average}%`
                        }}
                      ></div>

                    </div>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </div>

      {/* AI INSIGHTS */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            AI Comparison Insights
          </h2>

          <p className="text-slate-400 text-xs">
            AI-generated observations from comparative analytics
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-green-400 text-xs font-semibold mb-2">
              ABOVE AVERAGE
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Strong SQL Skills
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Candidate performance exceeds platform average by 14%.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-yellow-400 text-xs font-semibold mb-2">
              IMPROVEMENT AREA
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Power BI DAX
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Performance is slightly below platform benchmark.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-blue-400 text-xs font-semibold mb-2">
              RECOMMENDATION
            </p>

            <h3 className="text-sm font-semibold mb-2">
              Maintain Daily Consistency
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Consistent practice may push rank into top percentile.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default ComparisonPage