function PrimaryButton({

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
        bg-blue-600
        hover:bg-blue-700
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition-all
        px-5 py-2.5
        rounded-xl
        text-sm font-medium
        text-white
        ${className}
      `}
    >

      {children}

    </button>
  )
}

export default PrimaryButton