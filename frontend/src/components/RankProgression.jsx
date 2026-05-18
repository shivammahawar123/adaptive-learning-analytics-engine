function RankProgression() {

  const tiers = [

    {
      name: "Beginner",
      xp: "0 XP",
      active: false
    },

    {
      name: "Intermediate",
      xp: "500 XP",
      active: false
    },

    {
      name: "Advanced",
      xp: "1500 XP",
      active: false
    },

    {
      name: "Expert",
      xp: "3500 XP",
      active: false
    },

    {
      name: "Elite",
      xp: "7000 XP",
      active: true
    },

    {
      name: "Master",
      xp: "15000 XP",
      active: false
    }

  ]

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-bold mb-2">
          Rank Progression System
        </h2>

        <p className="text-slate-400">
          Tier advancement based on cumulative XP progression.
        </p>

      </div>

      {/* Progression */}

      <div className="space-y-5">

        {
          tiers.map((tier, index) => (

            <div
              key={index}
              className={`
                rounded-2xl p-5 border transition-all
                ${
                  tier.active
                    ? "bg-blue-600 border-blue-500"
                    : "bg-slate-950 border-slate-800"
                }
              `}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3
                    className={`
                      text-xl font-bold
                      ${
                        tier.active
                          ? "text-white"
                          : "text-slate-300"
                      }
                    `}
                  >
                    {tier.name}
                  </h3>

                  <p
                    className={`
                      mt-1
                      ${
                        tier.active
                          ? "text-blue-100"
                          : "text-slate-500"
                      }
                    `}
                  >
                    Required XP → {tier.xp}
                  </p>

                </div>

                {
                  tier.active && (

                    <div className="bg-white/10 px-4 py-2 rounded-xl text-sm font-semibold">

                      Current Tier

                    </div>

                  )
                }

              </div>

            </div>
          ))
        }

      </div>

      {/* XP Info */}

      <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold mb-4">
          XP Reward Structure
        </h3>

        <div className="space-y-3 text-slate-300">

          <div className="flex items-center justify-between">
            <p>Correct Easy Question</p>
            <p>+10 XP</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Correct Medium Question</p>
            <p>+20 XP</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Correct Hard Question</p>
            <p>+40 XP</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Daily Streak Bonus</p>
            <p>+15 XP</p>
          </div>

          <div className="flex items-center justify-between">
            <p>Complete Subject Module</p>
            <p>+100 XP</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default RankProgression