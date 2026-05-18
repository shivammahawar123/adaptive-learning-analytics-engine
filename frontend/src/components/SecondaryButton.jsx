function SecondaryButton({

  children,

  onClick,

  type = "button",

  disabled = false,

  className = ""
}) {

  return (

    <button

      type={type}

      onClick={onClick}

      disabled={disabled}

      className={`
        bg-slate-800
        hover:bg-slate-700
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition-all
        px-5 py-2.5
        rounded-xl
        text-sm
        text-white
        border border-slate-700
        ${className}
      `}
    >

      {children}

    </button>
  )
}

export default SecondaryButton