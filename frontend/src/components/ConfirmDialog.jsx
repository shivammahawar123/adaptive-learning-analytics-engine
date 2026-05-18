import PrimaryButton from "./PrimaryButton"

import SecondaryButton from "./SecondaryButton"

import DangerButton from "./DangerButton"

function ConfirmDialog({

  isOpen,

  onClose,

  onConfirm,

  title = "Confirm Action",

  description = "Are you sure you want to continue?",

  confirmText = "Confirm",

  cancelText = "Cancel",

  danger = false
}) {

  if (!isOpen) {

    return null
  }

  return (

    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        {/* HEADER */}

        <div className="px-6 py-5 border-b border-slate-800">

          <h2 className="text-xl font-semibold mb-2">

            {title}

          </h2>

          <p className="text-slate-400 text-sm leading-7">

            {description}

          </p>

        </div>

        {/* ACTIONS */}

        <div className="flex items-center justify-end gap-3 p-6">

          <SecondaryButton
            onClick={onClose}
          >

            {cancelText}

          </SecondaryButton>

          {
            danger ? (

              <DangerButton
                onClick={onConfirm}
              >

                {confirmText}

              </DangerButton>

            ) : (

              <PrimaryButton
                onClick={onConfirm}
              >

                {confirmText}

              </PrimaryButton>
            )
          }

        </div>

      </div>

    </div>
  )
}

export default ConfirmDialog