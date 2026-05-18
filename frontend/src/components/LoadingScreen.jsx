function LoadingScreen({

  title = "Loading...",

  subtitle = "Preparing platform data."
}) {

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="text-center">

        {/* LOADER */}

        <div className="relative w-20 h-20 mx-auto mb-6">

          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>

          <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

        </div>

        {/* TEXT */}

        <h2 className="text-2xl font-semibold mb-2">

          {title}

        </h2>

        <p className="text-slate-400 text-sm">

          {subtitle}

        </p>

      </div>

    </div>
  )
}

export default LoadingScreen