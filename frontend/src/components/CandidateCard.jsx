import StatusBadge from "./StatusBadge"

function CandidateCard({

  name,

  username,

  tier,

  xp,

  accuracy,

  rank,

  highlight = false
}) {

  return (

    <div
      className={`
        border rounded-2xl p-4
        ${
          highlight
            ? "bg-blue-600/10 border-blue-500/40"
            : "bg-slate-900 border-slate-800"
        }
      `}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">

        <div>

          <p className="text-slate-500 text-xs mb-1">

            Candidate

          </p>

          <h2 className="text-xl font-semibold">

            {name}

          </h2>

          <p className="text-slate-400 text-xs mt-1">

            @{username}

          </p>

        </div>

        <StatusBadge
          label={`${tier} Tier`}
          type={
            highlight
              ? "info"
              : "default"
          }
        />

      </div>

      {/* STATS */}

      <div className="grid grid-cols-3 gap-3">

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

          <p className="text-slate-500 text-[10px] mb-1">

            XP

          </p>

          <h3 className="text-lg font-semibold">

            {xp}

          </h3>

        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

          <p className="text-slate-500 text-[10px] mb-1">

            Accuracy

          </p>

          <h3 className="text-lg font-semibold">

            {accuracy}%

          </h3>

        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3">

          <p className="text-slate-500 text-[10px] mb-1">

            Rank

          </p>

          <h3 className="text-lg font-semibold">

            #{rank}

          </h3>

        </div>

      </div>

    </div>
  )
}

export default CandidateCard