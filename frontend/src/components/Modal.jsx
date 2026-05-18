function Modal({

  isOpen,

  onClose,

  title,

  subtitle,

  children,

  width = "max-w-2xl"
}) {

  if (!isOpen) {

    return null
  }

  return (

    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">

      <div
        className={`
          w-full
          ${width}
          bg-slate-900
          border border-slate-800
          rounded-2xl
          overflow-hidden
        `}
      >

        {/* HEADER */}

        <div className="border-b border-slate-800 px-6 py-5">

          <div className="flex items-start justify-between gap-4">

            <div>

              <h2 className="text-xl font-semibold mb-1">

                {title}

              </h2>

              {
                subtitle && (

                  <p className="text-slate-400 text-sm">

                    {subtitle}

                  </p>
                )
              }

            </div>

            {/* CLOSE */}

            <button

              onClick={onClose}

              className="
                w-10 h-10
                rounded-xl
                bg-slate-800
                hover:bg-slate-700
                transition-all
                flex items-center justify-center
                text-slate-300
              "
            >

              ✕

            </button>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-6">

          {children}

        </div>

      </div>

    </div>
  )
}

export default Modal