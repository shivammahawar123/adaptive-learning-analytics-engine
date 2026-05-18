import StatusBadge from "./StatusBadge"

function TicketCard({

  subject,

  category,

  priority,

  status,

  createdAt,

  description
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

    return "purple"
  }

  const getStatusType = () => {

    if (status === "Resolved") {

      return "success"
    }

    if (status === "In Progress") {

      return "info"
    }

    if (status === "Open") {

      return "warning"
    }

    return "default"
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

      {/* HEADER */}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">

        <div>

          <div className="flex items-center gap-2 mb-2">

            <StatusBadge
              label={category}
              type="default"
            />

            <StatusBadge
              label={priority}
              type={getPriorityType()}
            />

            <StatusBadge
              label={status}
              type={getStatusType()}
            />

          </div>

          <h2 className="text-lg font-semibold mb-1">

            {subject}

          </h2>

          <p className="text-slate-500 text-xs">

            Created on {createdAt}

          </p>

        </div>

      </div>

      {/* DESCRIPTION */}

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

        <p className="text-slate-400 text-sm leading-7">

          {description}

        </p>

      </div>

    </div>
  )
}

export default TicketCard