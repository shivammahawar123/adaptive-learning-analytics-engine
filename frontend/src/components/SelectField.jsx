function SelectField({

  label,

  name,

  value,

  onChange,

  options = []
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

      <select

        name={name}

        value={value}

        onChange={onChange}

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
      >

        {
          options.map((option, index) => (

            <option
              key={index}
              value={option}
            >

              {option}

            </option>
          ))
        }

      </select>

    </div>
  )
}

export default SelectField