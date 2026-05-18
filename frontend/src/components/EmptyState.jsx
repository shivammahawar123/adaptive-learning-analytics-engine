function EmptyState({

  title = "No Data Available",

  description = "There is currently no information to display.",

  action
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

      {/* ICON */}

      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-slate-800 flex items-center justify-center">

        <div className="w-6 h-6 rounded-full bg-slate-600"></div>

      </div>

      {/* TEXT */}

      <h2 className="text-lg font-semibold mb-2">

        {title}

      </h2>

      <p className="text-slate-400 text-sm leading-7 max-w-md mx-auto">

        {description}

      </p>

      {/* ACTION */}

      {
        action && (

          <div className="mt-6">

            {action}

          </div>
        )
      }

    </div>
  )
}

export default EmptyState