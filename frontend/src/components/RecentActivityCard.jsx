import StatusBadge from "./StatusBadge"

function RecentActivityCard({

  title,

  description,

  time,

  type = "info"
}) {

  const badgeTypes = {

    success: "success",

    warning: "warning",

    danger: "danger",

    info: "info",

    default: "default"
  }

  const labels = {

    success: "Completed",

    warning: "Attention",

    danger: "Issue",

    info: "Update",

    default: "Activity"
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      <div className="flex items-start justify-between gap-4 mb-3">

        <div>

          <h2 className="text-sm font-semibold mb-1">

            {title}

          </h2>

          <p className="text-slate-400 text-xs leading-6">

            {description}

          </p>

        </div>

        <StatusBadge
          label={labels[type]}
          type={badgeTypes[type]}
        />

      </div>

      {/* FOOTER */}

      <div className="flex items-center justify-between pt-3 border-t border-slate-800">

        <p className="text-slate-500 text-[10px]">

          Recent Activity

        </p>

        <p className="text-slate-500 text-[10px]">

          {time}

        </p>

      </div>

    </div>
  )
}

export default RecentActivityCard