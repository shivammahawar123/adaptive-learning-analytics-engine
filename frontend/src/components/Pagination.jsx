function Pagination({

  currentPage = 1,

  totalPages = 1,

  onPageChange
}) {

  const pages = []

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    pages.push(i)
  }

  return (

    <div className="flex flex-wrap items-center justify-center gap-2">

      {/* PREVIOUS */}

      <button

        onClick={() => {

          if (currentPage > 1) {

            onPageChange(currentPage - 1)
          }
        }}

        disabled={currentPage === 1}

        className="
          px-4 py-2
          rounded-xl
          text-sm
          bg-slate-800
          border border-slate-700
          hover:bg-slate-700
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-all
        "
      >

        Previous

      </button>

      {/* PAGE NUMBERS */}

      {
        pages.map((page) => (

          <button
            key={page}

            onClick={() => {

              onPageChange(page)
            }}

            className={`
              w-10 h-10
              rounded-xl
              text-sm
              transition-all
              ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 border border-slate-700 hover:bg-slate-700"
              }
            `}
          >

            {page}

          </button>
        ))
      }

      {/* NEXT */}

      <button

        onClick={() => {

          if (currentPage < totalPages) {

            onPageChange(currentPage + 1)
          }
        }}

        disabled={currentPage === totalPages}

        className="
          px-4 py-2
          rounded-xl
          text-sm
          bg-slate-800
          border border-slate-700
          hover:bg-slate-700
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-all
        "
      >

        Next

      </button>

    </div>
  )
}

export default Pagination