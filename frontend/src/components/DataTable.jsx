function DataTable({

  columns = [],

  data = [],

  emptyMessage = "No data available."
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="w-full">

          {/* HEADER */}

          <thead className="bg-slate-950 border-b border-slate-800">

            <tr>

              {
                columns.map((column, index) => (

                  <th
                    key={index}
                    className="
                      text-left
                      px-4 py-4
                      text-xs
                      font-semibold
                      tracking-wider
                      text-slate-400
                      uppercase
                      whitespace-nowrap
                    "
                  >

                    {column.header}

                  </th>
                ))
              }

            </tr>

          </thead>

          {/* BODY */}

          <tbody>

            {
              data.length > 0 ? (

                data.map((row, rowIndex) => (

                  <tr
                    key={rowIndex}
                    className="
                      border-b border-slate-800
                      hover:bg-slate-800/40
                      transition-all
                    "
                  >

                    {
                      columns.map((column, columnIndex) => (

                        <td
                          key={columnIndex}
                          className="
                            px-4 py-4
                            text-sm
                            text-slate-300
                            whitespace-nowrap
                          "
                        >

                          {
                            column.render
                              ? column.render(row)
                              : row[column.accessor]
                          }

                        </td>
                      ))
                    }

                  </tr>
                ))

              ) : (

                <tr>

                  <td
                    colSpan={columns.length}
                    className="
                      text-center
                      py-10
                      text-slate-500
                      text-sm
                    "
                  >

                    {emptyMessage}

                  </td>

                </tr>
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default DataTable