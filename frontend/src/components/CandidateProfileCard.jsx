import StatusBadge from "./StatusBadge"

function CandidateProfileCard({

  firstName,

  lastName,

  username,

  tier,

  trainingDay,

  xp,

  streak
}) {

  return (

    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">

      {/* HEADER */}

      <div className="mb-4">

        <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-2">

          Candidate Profile

        </p>

        <h2 className="text-sm font-semibold">

          {firstName} {lastName}

        </h2>

        <p className="text-slate-500 text-[11px] mt-1">

          @{username}

        </p>

      </div>

      {/* TIER */}

      <div className="mb-4">

        <StatusBadge
          label={`${tier} Tier`}
          type="info"
        />

      </div>

      {/* STATS */}

      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <p className="text-[11px] text-slate-500">

            Training Day

          </p>

          <p className="text-sm font-semibold">

            {trainingDay}

          </p>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-[11px] text-slate-500">

            Total XP

          </p>

          <p className="text-sm font-semibold">

            {xp}

          </p>

        </div>

        <div className="flex items-center justify-between">

          <p className="text-[11px] text-slate-500">

            Current Streak

          </p>

          <p className="text-sm font-semibold">

            {streak} Days

          </p>

        </div>

      </div>

    </div>
  )
}

export default CandidateProfileCard