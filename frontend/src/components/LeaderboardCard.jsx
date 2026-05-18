import StatusBadge from "./StatusBadge"

function LeaderboardCard({

  rank,

  name,

  username,

  xp,

  tier,

  accuracy,

  highlight = false
}) {

  const getRankStyle = () => {

    if (rank === 1) {

      return "bg-yellow-500 text-black"
    }

    if (rank === 2) {

      return "bg-slate-300 text-black"
    }

    if (rank === 3) {

      return "bg-orange-500 text-black"
    }

    return "bg-slate-800 text-white"
  }

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

      <div className="flex items-center justify-between gap-4">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          {/* RANK */}

          <div
            className={`
              w-12 h-12 rounded-2xl
              flex items-center justify-center
              font-bold text-lg
              ${getRankStyle()}
            `}
          >

            #{rank}

          </div>

          {/* USER */}

          <div>

            <h2 className="text-sm font-semibold mb-1">

              {name}

            </h2>

            <p className="text-slate-400 text-xs">

              @{username}

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {/* STATS */}

          <div className="hidden md:block text-right">

            <p className="text-slate-500 text-[10px] mb-1">

              Accuracy

            </p>

            <h3 className="text-sm font-semibold">

              {accuracy}%

            </h3>

          </div>

          <div className="hidden md:block text-right">

            <p className="text-slate-500 text-[10px] mb-1">

              XP

            </p>

            <h3 className="text-sm font-semibold">

              {xp}

            </h3>

          </div>

          {/* TIER */}

          <StatusBadge
            label={`${tier} Tier`}
            type={
              highlight
                ? "info"
                : "default"
            }
          />

        </div>

      </div>

    </div>
  )
}

export default LeaderboardCard