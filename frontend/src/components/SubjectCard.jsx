import ProgressBar from "./ProgressBar"

function SubjectCard({

  name,

  progress,

  description,

  compact = false
}) {

  const getStatus = () => {

    if (progress >= 75) {

      return {
        text: "Strong",
        color: "text-green-400"
      }
    }

    if (progress >= 60) {

      return {
        text: "Good",
        color: "text-blue-400"
      }
    }

    if (progress >= 50) {

      return {
        text: "Average",
        color: "text-yellow-400"
      }
    }

    return {
      text: "Needs Improvement",
      color: "text-red-400"
    }
  }

  const status = getStatus()

  return (

    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

      {/* TOP */}

      <div className="flex items-center justify-between mb-3">

        <h3
          className={`
            font-semibold
            ${compact ? "text-sm" : "text-base"}
          `}
        >

          {name}

        </h3>

        <span className="text-blue-400 text-xs font-semibold">

          {progress}%

        </span>

      </div>

      {/* BAR */}

      <div className="mb-3">

        <ProgressBar
          value={progress}
          color={
            progress >= 75
              ? "green"
              : progress >= 60
              ? "blue"
              : progress >= 50
              ? "yellow"
              : "red"
          }
        />

      </div>

      {/* STATUS */}

      <p
        className={`
          text-xs font-semibold mb-2
          ${status.color}
        `}
      >

        {status.text}

      </p>

      {/* DESCRIPTION */}

      {
        description && (

          <p className="text-slate-400 text-xs leading-5">

            {description}

          </p>
        )
      }

    </div>
  )
}

export default SubjectCard