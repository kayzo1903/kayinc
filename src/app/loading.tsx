import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"

const loading = () => {
  return (
    <section className='ww-full h-screen flex justify-center items-center'>
        <ClipLoader
        color={"#40A469"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  )
}

export default loading