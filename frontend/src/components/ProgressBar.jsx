function ProgressBar({

  value = 0,

  color = "blue",

  height = "h-2",

  showLabel = false
}) {

  const colorStyles = {

    blue: "bg-blue-600",

    green: "bg-green-500",

    yellow: "bg-yellow-500",

    red: "bg-red-500",

    purple: "bg-purple-500"
  }

  return (

    <div className="w-full">

      {
        showLabel && (

          <div className="flex items-center justify-between mb-2">

            <p className="text-xs text-slate-400">
              Progress
            </p>

            <p className="text-xs text-slate-400">
              {value}%
            </p>

          </div>
        )
      }

      <div
        className={`
          w-full bg-slate-800 rounded-full
          ${height}
        `}
      >

        <div
          className={`
            rounded-full transition-all duration-500
            ${height}
            ${colorStyles[color]}
          `}
          style={{
            width: `${value}%`
          }}
        ></div>

      </div>

    </div>
  )
}

export default ProgressBar