function InputField({

  label,

  type = "text",

  name,

  value,

  onChange,

  placeholder,

  required = false
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

      <input

        type={type}

        name={name}

        value={value}

        onChange={onChange}

        required={required}

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
        "
      />

    </div>
  )
}

export default InputField