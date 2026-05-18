import StatusBadge from "./StatusBadge"

import PrimaryButton from "./PrimaryButton"

function QuestionCard({

  title,

  subject,

  difficulty,

  xp
}) {

  const getDifficultyType = () => {

    if (difficulty === "Easy") {

      return "success"
    }

    if (difficulty === "Medium") {

      return "warning"
    }

    return "danger"
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      {/* TOP */}

      <div className="flex items-start justify-between mb-4">

        <div>

          {/* BADGES */}

          <div className="flex items-center gap-2 mb-2">

            <StatusBadge
              label={subject}
              type="default"
            />

            <StatusBadge
              label={difficulty}
              type={getDifficultyType()}
            />

          </div>

          {/* TITLE */}

          <h2 className="text-lg font-semibold leading-7">

            {title}

          </h2>

        </div>

        {/* XP */}

        <div className="bg-blue-600 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap">

          +{xp} XP

        </div>

      </div>

      {/* ACTIONS */}

      <div className="flex items-center gap-3">

        <PrimaryButton>

          Solve Question

        </PrimaryButton>

        <button
          className="
            bg-slate-800
            hover:bg-slate-700
            transition-all
            px-5 py-2
            rounded-xl
            text-sm
          "
        >

          View Solution

        </button>

      </div>

    </div>
  )
}

export default QuestionCard