import { Link, useLocation } from "react-router-dom"

import {

  LayoutDashboard,
  Route,
  FileQuestion,
  BarChart3,
  AlertTriangle,
  GitCompareArrows,
  LifeBuoy,
  Settings,
  LogOut

} from "lucide-react"

export default function MainLayout({ children }) {

  const location = useLocation()

  const user = {

    first_name: "Candidate",

    last_name: "User",

    username: "candidate_user",

    tier: "Elite",

    xp: 1240,

    streak: 12,

    training_day: 47
  }

  const navLinks = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },

    {
      name: "Roadmap",
      path: "/roadmap",
      icon: Route
    },

    {
      name: "Questions",
      path: "/questions",
      icon: FileQuestion
    },

    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3
    },

    {
      name: "Weak Areas",
      path: "/weak-topics",
      icon: AlertTriangle
    },

    {
      name: "Comparison",
      path: "/comparison",
      icon: GitCompareArrows
    },

    {
      name: "Support",
      path: "/support",
      icon: LifeBuoy
    }

  ]

  const handleLogout = () => {

    localStorage.removeItem("token")

    sessionStorage.removeItem(
      "welcomeShown"
    )

    window.location.href = "/"
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* SIDEBAR */}

      <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden lg:flex flex-col">

        {/* LOGO */}

        <div className="px-5 py-5 border-b border-slate-800">

          <h1 className="text-lg font-semibold tracking-wide leading-6">

            AI Data Analyst
            <br />
            Engine

          </h1>

          <p className="text-slate-500 text-[11px] mt-2 leading-5">

            Adaptive AI-powered analytics learning platform.

          </p>

        </div>

        {/* PROFILE */}

        <div className="px-5 py-5 border-b border-slate-800">

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">

            <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-2">

              Candidate Profile

            </p>

            <h2 className="text-sm font-semibold">

              {user.first_name} {user.last_name}

            </h2>

            <p className="text-slate-500 text-[11px] mt-1">

              @{user.username}

            </p>

            <div className="mt-4 inline-flex px-3 py-1 rounded-xl bg-blue-600 text-[11px] font-medium">

              {user.tier} Tier

            </div>

          </div>

        </div>

        {/* SNAPSHOT */}

        <div className="px-5 py-5 border-b border-slate-800">

          <h2 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-4">

            Performance Snapshot

          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <p className="text-[11px] text-slate-500">
                Training Day
              </p>

              <p className="text-sm font-semibold">
                {user.training_day}
              </p>

            </div>

            <div className="flex items-center justify-between">

              <p className="text-[11px] text-slate-500">
                Total XP
              </p>

              <p className="text-sm font-semibold">
                {user.xp}
              </p>

            </div>

            <div className="flex items-center justify-between">

              <p className="text-[11px] text-slate-500">
                Current Streak
              </p>

              <p className="text-sm font-semibold">
                {user.streak} Days
              </p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}

        <div className="flex-1 overflow-y-auto px-4 py-5">

          <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 px-3">

            Navigation

          </p>

          <nav className="space-y-1">

            {
              navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    flex items-center gap-3
                    px-4 py-3 rounded-xl
                    transition-all duration-200
                    text-sm font-medium
                    ${
                      location.pathname === link.path
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }
                  `}
                >

                  <link.icon size={17} />

                  <span>

                    {link.name}

                  </span>

                </Link>
              ))
            }

          </nav>

        </div>

        {/* FOOTER */}

        <div className="p-4 border-t border-slate-800 space-y-2">

          {/* SETTINGS */}

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all text-slate-300 text-sm"
          >

            <Settings size={17} />

            <span>
              Settings
            </span>

          </button>

          {/* LOGOUT */}

          <button

            onClick={handleLogout}

            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all text-white text-sm"
          >

            <LogOut size={17} />

            <span>
              Logout
            </span>

          </button>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="flex-1 overflow-y-auto">

        {/* TOP NAVBAR */}

        <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 py-5">

          <div className="flex items-center justify-between">

            {/* LEFT */}

            <div>

              <h1 className="text-2xl font-semibold mb-1">

                Welcome back, {user.first_name}

              </h1>

              <p className="text-slate-400 text-sm">

                Continue your analytics learning progression.

              </p>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">

              <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">

                <p className="text-[10px] text-slate-500 mb-1">
                  XP
                </p>

                <h3 className="text-sm font-semibold">
                  {user.xp}
                </h3>

              </div>

              <div className="bg-blue-600 rounded-xl px-4 py-3">

                <p className="text-[10px] text-blue-100 mb-1">
                  Current Tier
                </p>

                <h3 className="text-sm font-semibold">
                  {user.tier}
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* PAGE CONTENT */}

        <div className="p-4">

          {children}

        </div>

      </main>

    </div>
  )
}