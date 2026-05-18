import NavbarStat from "./NavbarStat"

function TopNavbar({

  firstName = "Candidate",

  xp = 1240,

  tier = "Elite"
}) {

  return (

    <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 py-5">

      <div className="flex items-center justify-between">

        {/* LEFT */}

        <div>

          <h1 className="text-2xl font-semibold mb-1">

            Welcome back, {firstName}

          </h1>

          <p className="text-slate-400 text-sm">

            Continue your analytics learning progression.

          </p>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <NavbarStat
            label="XP"
            value={xp}
          />

          <NavbarStat
            label="Current Tier"
            value={tier}
            highlight={true}
          />

        </div>

      </div>

    </div>
  )
}

export default TopNavbar