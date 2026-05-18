function InsightCard({

  type = "info",

  title,

  description
}) {

  const typeStyles = {

    success: {

      label: "STRENGTH",

      text: "text-green-400"
    },

    warning: {

      label: "FOCUS AREA",

      text: "text-yellow-400"
    },

    info: {

      label: "RECOMMENDATION",

      text: "text-blue-400"
    },

    danger: {

      label: "WEAK AREA",

      text: "text-red-400"
    }
  }

  return (

    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

      <p
        className={`
          text-xs font-semibold mb-2
          ${typeStyles[type].text}
        `}
      >

        {typeStyles[type].label}

      </p>

      <h3 className="text-sm font-semibold mb-2">

        {title}

      </h3>

      <p className="text-slate-400 text-xs leading-6">

        {description}

      </p>

    </div>
  )
}

export default InsightCard