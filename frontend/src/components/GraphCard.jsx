function GraphCard({

  title,

  subtitle,

  data = []
}) {

  const points = [

    "20,180",
    "100,150",
    "180,160",
    "260,110",
    "340,125",
    "420,70",
    "520,35"
  ]

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">

        <div>

          <h2 className="text-lg font-semibold mb-1">

            {title}

          </h2>

          <p className="text-slate-400 text-xs">

            {subtitle}

          </p>

        </div>

        <button
          className="
            bg-slate-800
            border border-slate-700
            px-3 py-2
            rounded-xl
            text-xs
          "
        >

          Last 7 Days

        </button>

      </div>

      {/* GRAPH */}

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 h-[250px]">

        <div className="relative h-full">

          {/* Y AXIS */}

          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-500">

            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>

          </div>

          {/* GRAPH AREA */}

          <div className="ml-8 h-full flex flex-col justify-between">

            {/* MAIN GRAPH */}

            <div className="flex-1 relative border-l border-b border-slate-700">

              {/* GRID LINES */}

              <div className="absolute top-[25%] left-0 right-0 border-t border-slate-800"></div>

              <div className="absolute top-[50%] left-0 right-0 border-t border-slate-800"></div>

              <div className="absolute top-[75%] left-0 right-0 border-t border-slate-800"></div>

              {/* SVG */}

              <svg
                viewBox="0 0 600 220"
                className="absolute inset-0 w-full h-full"
              >

                <polyline
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                  points={points.join(" ")}
                />

                {
                  points.map((point, index) => {

                    const [x, y] = point.split(",")

                    return (

                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#2563eb"
                      />
                    )
                  })
                }

              </svg>

            </div>

            {/* X AXIS */}

            <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-2">

              {
                data.map((item, index) => (

                  <span key={index}>

                    {item.day}

                  </span>
                ))
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default GraphCard