import { useState } from "react"

import PrimaryButton from "./PrimaryButton"

function AIChatInput({

  onSend,

  loading = false,

  placeholder =
    "Ask the AI tutor anything..."
}) {

  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!message.trim()) {

      return
    }

    onSend(message)

    setMessage("")
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-4
      "
    >

      <div className="flex items-end gap-3">

        {/* INPUT */}

        <textarea

          rows="3"

          value={message}

          onChange={(e) => {

            setMessage(e.target.value)
          }}

          placeholder={placeholder}

          className="
            flex-1
            bg-slate-950
            border border-slate-700
            rounded-xl
            p-3
            text-sm
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            resize-none
          "
        />

        {/* BUTTON */}

        <PrimaryButton
          type="submit"
          disabled={loading}
          className="h-fit"
        >

          {
            loading
              ? "Sending..."
              : "Send"
          }

        </PrimaryButton>

      </div>

    </form>
  )
}

export default AIChatInput