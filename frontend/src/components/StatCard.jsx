function StatCard({

  title,

  value,

  subtitle,

  color = "blue"

}) {

  const colorStyles = {

    blue: "text-blue-400",

    green: "text-green-400",

    yellow: "text-yellow-400",

    red: "text-red-400",

    purple: "text-purple-400"
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      <p className="text-slate-400 text-xs mb-1">

        {title}

      </p>

      <h2
        className={`
          text-2xl font-bold mb-1
          ${colorStyles[color]}
        `}
      >

        {value}

      </h2>

      {
        subtitle && (

          <p className="text-slate-500 text-xs leading-5">

            {subtitle}

          </p>
        )
      }

    </div>
  )
}

export default StatCard