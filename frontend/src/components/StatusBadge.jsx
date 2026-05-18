function StatusBadge({

  label,

  type = "default"
}) {

  const styles = {

    success:
      "bg-green-500/20 text-green-400",

    warning:
      "bg-yellow-500/20 text-yellow-400",

    danger:
      "bg-red-500/20 text-red-400",

    info:
      "bg-blue-500/20 text-blue-400",

    purple:
      "bg-purple-500/20 text-purple-400",

    default:
      "bg-slate-800 text-slate-300"
  }

  return (

    <span
      className={`
        inline-flex
        items-center
        px-3 py-1
        rounded-lg
        text-xs
        font-medium
        ${styles[type]}
      `}
    >

      {label}

    </span>
  )
}

export default StatusBadge