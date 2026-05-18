function DangerButton({

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
        bg-red-500
        hover:bg-red-600
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition-all
        px-5 py-2.5
        rounded-xl
        text-sm
        font-medium
        text-white
        ${className}
      `}
    >

      {children}

    </button>
  )
}

export default DangerButton