import { Link } from "react-router-dom"

function SidebarLink({

  to,

  icon: Icon,

  label,

  active = false
}) {

  return (

    <Link
      to={to}
      className={`
        flex items-center gap-3
        px-4 py-3
        rounded-xl
        transition-all duration-200
        text-sm font-medium
        ${
          active
            ? "bg-blue-600 text-white"
            : "text-slate-300 hover:bg-slate-800"
        }
      `}
    >

      {
        Icon && (

          <Icon size={17} />
        )
      }

      <span>

        {label}

      </span>

    </Link>
  )
}

export default SidebarLink