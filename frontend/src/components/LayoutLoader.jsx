function LayoutLoader() {

  return (

    <div className="min-h-screen bg-slate-950 flex">

      {/* SIDEBAR */}

      <div className="hidden lg:flex w-64 bg-slate-900 border-r border-slate-800 flex-col">

        <div className="p-5 border-b border-slate-800">

          <div className="h-6 w-40 bg-slate-800 rounded animate-pulse mb-3"></div>

          <div className="h-3 w-52 bg-slate-800 rounded animate-pulse"></div>

        </div>

        <div className="p-5 border-b border-slate-800">

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">

            <div className="h-3 w-24 bg-slate-800 rounded animate-pulse mb-3"></div>

            <div className="h-5 w-36 bg-slate-800 rounded animate-pulse mb-2"></div>

            <div className="h-3 w-28 bg-slate-800 rounded animate-pulse mb-4"></div>

            <div className="h-7 w-24 bg-slate-800 rounded-xl animate-pulse"></div>

          </div>

        </div>

        <div className="flex-1 p-4 space-y-3">

          {
            Array.from({ length: 7 }).map((_, index) => (

              <div
                key={index}
                className="h-12 bg-slate-800 rounded-xl animate-pulse"
              ></div>
            ))
          }

        </div>

      </div>

      {/* MAIN */}

      <div className="flex-1">

        {/* TOPBAR */}

        <div className="border-b border-slate-800 px-6 py-5">

          <div className="flex items-center justify-between">

            <div>

              <div className="h-7 w-60 bg-slate-800 rounded animate-pulse mb-2"></div>

              <div className="h-4 w-80 bg-slate-800 rounded animate-pulse"></div>

            </div>

            <div className="flex gap-3">

              <div className="h-16 w-24 bg-slate-800 rounded-xl animate-pulse"></div>

              <div className="h-16 w-24 bg-slate-800 rounded-xl animate-pulse"></div>

            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-4">

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mb-4">

            {
              Array.from({ length: 4 }).map((_, index) => (

                <div
                  key={index}
                  className="h-28 bg-slate-900 border border-slate-800 rounded-2xl animate-pulse"
                ></div>
              ))
            }

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

            <div className="h-[350px] bg-slate-900 border border-slate-800 rounded-2xl animate-pulse"></div>

            <div className="h-[350px] bg-slate-900 border border-slate-800 rounded-2xl animate-pulse"></div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LayoutLoader