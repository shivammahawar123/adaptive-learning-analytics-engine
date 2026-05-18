function NotificationBanner({

  type = "info",

  title,

  description,

  onClose
}) {

  const styles = {

    success: {

      wrapper:
        "bg-green-500/10 border-green-500/30",

      title:
        "text-green-400"
    },

    warning: {

      wrapper:
        "bg-yellow-500/10 border-yellow-500/30",

      title:
        "text-yellow-400"
    },

    danger: {

      wrapper:
        "bg-red-500/10 border-red-500/30",

      title:
        "text-red-400"
    },

    info: {

      wrapper:
        "bg-blue-500/10 border-blue-500/30",

      title:
        "text-blue-400"
    }
  }

  return (

    <div
      className={`
        border rounded-2xl p-4
        ${styles[type].wrapper}
      `}
    >

      <div className="flex items-start justify-between gap-4">

        {/* LEFT */}

        <div>

          <h3
            className={`
              text-sm font-semibold mb-1
              ${styles[type].title}
            `}
          >

            {title}

          </h3>

          {
            description && (

              <p className="text-slate-300 text-xs leading-6">

                {description}

              </p>
            )
          }

        </div>

        {/* CLOSE */}

        {
          onClose && (

            <button

              onClick={onClose}

              className="
                text-slate-400
                hover:text-white
                transition-all
                text-sm
              "
            >

              ✕

            </button>
          )
        }

      </div>

    </div>
  )
}

export default NotificationBanner