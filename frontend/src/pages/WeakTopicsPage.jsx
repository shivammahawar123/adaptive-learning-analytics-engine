import MainLayout from "../layouts/MainLayout"

function WeakTopicsPage() {

  const weakTopics = [

    {
      topic: "Power BI DAX",
      subject: "Power BI",
      accuracy: 42,
      attempts: 28,
      recommendation:
        "Practice CALCULATE, FILTER, and context transition concepts."
    },

    {
      topic: "SQL Window Functions",
      subject: "SQL",
      accuracy: 51,
      attempts: 21,
      recommendation:
        "Focus on ROW_NUMBER, RANK, and PARTITION BY usage."
    },

    {
      topic: "Python Pandas",
      subject: "Python",
      accuracy: 58,
      attempts: 18,
      recommendation:
        "Improve dataframe manipulation and groupby operations."
    },

    {
      topic: "Probability",
      subject: "Statistics",
      accuracy: 47,
      attempts: 15,
      recommendation:
        "Revise conditional probability and Bayes theorem."
    }

  ]

  return (

    <MainLayout>

      {/* HEADER */}

      <div className="mb-4">

        <h1 className="text-2xl font-semibold mb-1">
          Weak Areas Analysis
        </h1>

        <p className="text-slate-400 text-sm">
          AI-detected weak topics based on performance trends and mistakes.
        </p>

      </div>

      {/* OVERVIEW */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Weak Topics
          </p>

          <h2 className="text-2xl font-bold">
            12
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Improvement Rate
          </p>

          <h2 className="text-2xl font-bold">
            +14%
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Practice Sessions
          </p>

          <h2 className="text-2xl font-bold">
            48
          </h2>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <p className="text-slate-400 text-xs mb-1">
            Focus Accuracy
          </p>

          <h2 className="text-2xl font-bold">
            54%
          </h2>

        </div>

      </div>

      {/* TOPICS */}

      <div className="space-y-4 mb-4">

        {
          weakTopics.map((topic, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
            >

              {/* TOP */}

              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">

                <div>

                  <div className="flex items-center gap-2 mb-2">

                    <span className="bg-slate-800 px-3 py-1 rounded-lg text-xs text-slate-300">

                      {topic.subject}

                    </span>

                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-xs font-medium">

                      Weak Area

                    </span>

                  </div>

                  <h2 className="text-lg font-semibold">

                    {topic.topic}

                  </h2>

                </div>

                {/* ACCURACY */}

                <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">

                  <p className="text-slate-500 text-[10px] mb-1">
                    Accuracy
                  </p>

                  <h3 className="text-lg font-semibold text-red-400">

                    {topic.accuracy}%

                  </h3>

                </div>

              </div>

              {/* PROGRESS */}

              <div className="mb-4">

                <div className="flex items-center justify-between mb-2">

                  <p className="text-xs text-slate-400">
                    Current Mastery
                  </p>

                  <p className="text-xs text-slate-400">
                    {topic.accuracy}%
                  </p>

                </div>

                <div className="w-full bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{
                      width: `${topic.accuracy}%`
                    }}
                  ></div>

                </div>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

                  <p className="text-slate-500 text-[10px] mb-1">
                    Total Attempts
                  </p>

                  <h3 className="text-lg font-semibold">

                    {topic.attempts}

                  </h3>

                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

                  <p className="text-slate-500 text-[10px] mb-1">
                    AI Status
                  </p>

                  <h3 className="text-sm font-semibold text-yellow-400">

                    Needs Focus

                  </h3>

                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

                  <p className="text-slate-500 text-[10px] mb-1">
                    Recommended Practice
                  </p>

                  <h3 className="text-sm font-semibold text-blue-400">

                    Daily Revision

                  </h3>

                </div>

              </div>

              {/* AI RECOMMENDATION */}

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

                <p className="text-blue-400 text-xs font-semibold mb-2">
                  AI RECOMMENDATION
                </p>

                <p className="text-slate-400 text-sm leading-7">

                  {topic.recommendation}

                </p>

              </div>

            </div>
          ))
        }

      </div>

      {/* ACTION PANEL */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="mb-4">

          <h2 className="text-lg font-semibold mb-1">
            Recommended Actions
          </h2>

          <p className="text-slate-400 text-xs">
            Suggested steps to improve weak areas faster
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              Solve More Practice Sets
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Focus on repetition-based learning for difficult concepts.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              Use AI Tutor Frequently
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Ask doubts immediately after incorrect attempts.
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <h3 className="text-sm font-semibold mb-2">
              Daily Revision Sessions
            </h3>

            <p className="text-slate-400 text-xs leading-6">
              Short consistent revision improves retention significantly.
            </p>

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default WeakTopicsPage