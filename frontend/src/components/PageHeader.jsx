function PageHeader({

  title,

  subtitle,

  action
}) {

  return (

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">

      {/* LEFT */}

      <div>

        <h1 className="text-2xl font-semibold mb-1">

          {title}

        </h1>

        <p className="text-slate-400 text-sm">

          {subtitle}

        </p>

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

export default PageHeader