function SystemModal({ onClose }) {

  return (

    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        {/* TOP */}

        <div className="bg-blue-600 p-6">

          <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium mb-4">

            AI-Powered Adaptive Learning System

          </div>

          <h1 className="text-3xl font-bold leading-tight mb-4">

            Welcome to the
            <br />
            AI Data Analyst Engine

          </h1>

          <p className="text-blue-100 text-sm leading-7">

            Personalized analytics learning ecosystem built to accelerate technical mastery using AI-driven evaluation, roadmap progression, adaptive practice, and performance analytics.

          </p>

        </div>

        {/* CONTENT */}

        <div className="p-6">

          {/* FEATURES */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                AI-Based Learning
              </h3>

              <p className="text-slate-400 text-xs leading-6">

                Adaptive recommendations generated from candidate performance patterns.

              </p>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                XP & Rank System
              </h3>

              <p className="text-slate-400 text-xs leading-6">

                Progression hierarchy based on consistency, mastery, and analytics performance.

              </p>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                Weak Area Detection
              </h3>

              <p className="text-slate-400 text-xs leading-6">

                AI automatically identifies weak topics and recommends improvements.

              </p>

            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

              <h3 className="text-sm font-semibold mb-2">
                Performance Analytics
              </h3>

              <p className="text-slate-400 text-xs leading-6">

                Track subject mastery, learning trends, and progression metrics.

              </p>

            </div>

          </div>

          {/* RANK STRUCTURE */}

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6">

            <div className="mb-4">

              <h2 className="text-lg font-semibold mb-1">
                Rank Progression System
              </h2>

              <p className="text-slate-400 text-xs">
                Candidate hierarchy based on XP progression
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Beginner
                </h3>

                <p className="text-slate-400 text-[10px]">
                  0 – 499 XP
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Intermediate
                </h3>

                <p className="text-slate-400 text-[10px]">
                  500 – 999 XP
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Advanced
                </h3>

                <p className="text-slate-400 text-[10px]">
                  1000 – 1499 XP
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Expert
                </h3>

                <p className="text-slate-400 text-[10px]">
                  1500 – 1999 XP
                </p>

              </div>

              <div className="bg-blue-600 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Elite
                </h3>

                <p className="text-blue-100 text-[10px]">
                  2000 – 2499 XP
                </p>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">

                <h3 className="text-sm font-semibold mb-1">
                  Master
                </h3>

                <p className="text-slate-400 text-[10px]">
                  2500+ XP
                </p>

              </div>

            </div>

          </div>

          {/* FOOTER */}

          <div className="flex items-center justify-end">

            <button

              onClick={onClose}

              className="bg-blue-600 hover:bg-blue-700 transition-all px-5 py-3 rounded-xl text-sm font-medium"

            >

              Continue

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SystemModal