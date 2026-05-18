import ProgressBar from "./ProgressBar"

import StatusBadge from "./StatusBadge"

import PrimaryButton from "./PrimaryButton"

function RoadmapPhaseCard({

  phase,

  title,

  progress,

  status
}) {

  const getStatusType = () => {

    if (status === "Completed") {

      return "success"
    }

    if (status === "In Progress") {

      return "info"
    }

    return "default"
  }

  const getBarColor = () => {

    if (status === "Completed") {

      return "green"
    }

    if (status === "In Progress") {

      return "blue"
    }

    return "yellow"
  }

  return (

    <div
      className={`
        border rounded-2xl p-4
        ${
          status === "In Progress"
            ? "bg-blue-600/10 border-blue-500/40"
            : "bg-slate-900 border-slate-800"
        }
      `}
    >

      {/* TOP */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">

        <div>

          <div className="flex items-center gap-2 mb-2">

            <StatusBadge
              label={phase}
              type="default"
            />

            <StatusBadge
              label={status}
              type={getStatusType()}
            />

          </div>

          <h2 className="text-lg font-semibold">

            {title}

          </h2>

        </div>

        {/* PROGRESS */}

        <div className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">

          <p className="text-slate-500 text-[10px] mb-1">

            Progress

          </p>

          <h3 className="text-lg font-semibold">

            {progress}%

          </h3>

        </div>

      </div>

      {/* BAR */}

      <div className="mb-4">

        <ProgressBar
          value={progress}
          color={getBarColor()}
          height="h-3"
          showLabel={true}
        />

      </div>

      {/* ACTIONS */}

      <div className="flex items-center gap-3">

        <PrimaryButton>

          Continue Phase

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

          View Topics

        </button>

      </div>

    </div>
  )
}

export default RoadmapPhaseCard