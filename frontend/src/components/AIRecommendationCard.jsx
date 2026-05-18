import StatusBadge from "./StatusBadge"

function AIRecommendationCard({

  title,

  description,

  priority = "Medium",

  category = "Recommendation"
}) {

  const getPriorityType = () => {

    if (priority === "Low") {

      return "success"
    }

    if (priority === "Medium") {

      return "warning"
    }

    if (priority === "High") {

      return "danger"
    }

    return "info"
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2">

          <StatusBadge
            label={category}
            type="info"
          />

          <StatusBadge
            label={`${priority} Priority`}
            type={getPriorityType()}
          />

        </div>

        <div className="bg-blue-600/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-lg">

          AI

        </div>

      </div>

      {/* CONTENT */}

      <h2 className="text-lg font-semibold mb-2">

        {title}

      </h2>

      <p className="text-slate-400 text-sm leading-7">

        {description}

      </p>

    </div>
  )
}

export default AIRecommendationCard