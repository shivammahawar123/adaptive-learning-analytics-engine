function SectionCard({

  title,

  subtitle,

  children,

  action,

  className = ""
}) {

  return (

    <div
      className={`
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-4
        ${className}
      `}
    >

      {/* HEADER */}

      {
        (title || subtitle || action) && (

          <div className="flex items-start justify-between gap-4 mb-4">

            {/* LEFT */}

            <div>

              {
                title && (

                  <h2 className="text-lg font-semibold mb-1">

                    {title}

                  </h2>
                )
              }

              {
                subtitle && (

                  <p className="text-slate-400 text-xs">

                    {subtitle}

                  </p>
                )
              }

            </div>

            {/* RIGHT ACTION */}

            {
              action && (

                <div>

                  {action}

                </div>
              )
            }

          </div>
        )
      }

      {/* CONTENT */}

      <div>

        {children}

      </div>

    </div>
  )
}

export default SectionCard