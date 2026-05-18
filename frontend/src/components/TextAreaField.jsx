function TextAreaField({

  label,

  name,

  value,

  onChange,

  placeholder,

  rows = 5
}) {

  return (

    <div>

      {
        label && (

          <label className="block text-sm mb-2 text-slate-300">

            {label}

          </label>
        )
      }

      <textarea

        name={name}

        value={value}

        onChange={onChange}

        rows={rows}

        placeholder={placeholder}

        className="
          w-full
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

    </div>
  )
}

export default TextAreaField