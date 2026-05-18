import PrimaryButton from "./PrimaryButton"

function ErrorState({

  title = "Something Went Wrong",

  description =
    "An unexpected error occurred while loading data.",

  buttonText = "Retry",

  onRetry
}) {

  return (

    <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-10 text-center">

      {/* ICON */}

      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">

        <span className="text-red-400 text-2xl">

          !

        </span>

      </div>

      {/* TEXT */}

      <h2 className="text-xl font-semibold mb-2">

        {title}

      </h2>

      <p className="text-slate-400 text-sm leading-7 max-w-md mx-auto mb-6">

        {description}

      </p>

      {/* BUTTON */}

      {
        onRetry && (

          <PrimaryButton
            onClick={onRetry}
          >

            {buttonText}

          </PrimaryButton>
        )
      }

    </div>
  )
}

export default ErrorState