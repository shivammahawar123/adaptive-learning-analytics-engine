function AIChatMessage({

  role = "assistant",

  message,

  timestamp
}) {

  const isAssistant =
    role === "assistant"

  return (

    <div
      className={`
        flex
        ${isAssistant ? "justify-start" : "justify-end"}
      `}
    >

      <div
        className={`
          max-w-[85%]
          rounded-2xl
          p-4
          border
          ${
            isAssistant
              ? "bg-slate-900 border-slate-800"
              : "bg-blue-600 border-blue-500"
          }
        `}
      >

        {/* ROLE */}

        <div className="flex items-center justify-between gap-4 mb-2">

          <p
            className={`
              text-xs font-semibold
              ${
                isAssistant
                  ? "text-blue-400"
                  : "text-white"
              }
            `}
          >

            {
              isAssistant
                ? "AI Tutor"
                : "Candidate"
            }

          </p>

          {
            timestamp && (

              <p
                className={`
                  text-[10px]
                  ${
                    isAssistant
                      ? "text-slate-500"
                      : "text-blue-100"
                  }
                `}
              >

                {timestamp}

              </p>
            )
          }

        </div>

        {/* MESSAGE */}

        <p
          className={`
            text-sm leading-7 whitespace-pre-wrap
            ${
              isAssistant
                ? "text-slate-300"
                : "text-white"
            }
          `}
        >

          {message}

        </p>

      </div>

    </div>
  )
}

export default AIChatMessage