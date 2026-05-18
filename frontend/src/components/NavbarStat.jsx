function NavbarStat({

  label,

  value,

  highlight = false
}) {

  return (

    <div
      className={`
        rounded-xl
        px-4 py-3
        border
        ${
          highlight
            ? "bg-blue-600 border-blue-500"
            : "bg-slate-900 border-slate-800"
        }
      `}
    >

      <p
        className={`
          text-[10px] mb-1
          ${
            highlight
              ? "text-blue-100"
              : "text-slate-500"
          }
        `}
      >

        {label}

      </p>

      <h3 className="text-sm font-semibold">

        {value}

      </h3>

    </div>
  )
}

export default NavbarStat