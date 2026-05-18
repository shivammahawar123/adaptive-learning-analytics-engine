function PageContainer({

  children,

  className = ""
}) {

  return (

    <div
      className={`
        w-full
        max-w-[1600px]
        mx-auto
        p-4
        ${className}
      `}
    >

      {children}

    </div>
  )
}

export default PageContainer