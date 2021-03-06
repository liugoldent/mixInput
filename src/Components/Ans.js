import React from 'react'

const Ans = ({controlModalFunc}) =>{
  return (
    <div className="flex justify-center items-center
      flex-col fixed mx-1 my-1 inset-0
      overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none"
      onClick={() => controlModalFunc(false)}>
      <div className="relative w-auto mx-auto max-w-3xl my-6">
        {/*content*/}
        <div className="
        bg-gray-50 w-full rounded-lg shadow-lg relative
        flex flex-col
        outline-none focus:outline-none
        border-solid border-gray-400 border
        mt-28 md:mt-0 lg:mt-0">
          {/*header*/}
          <div className="
          flex items-start justify-between
          p-5 border-solid border-b border-gray-300
          ">
            <h3 className="text-3xl font-semibold">
              Title
            </h3>
            <button className="outline-none focus:outline-none">
              <span className="bg-transparent text-black h-6 w-6 text-2xl block
              outline-none focus:outline-none"
              onClick={() => controlModalFunc(false)}>
                x
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="text-gray-600 text-lg my-4 leading-relaxed">
            I always felt like I could do anything. That’s the main
            thing people are controlled by! Thoughts- their perception
            of themselves! They're slowed down by their perception of
            themselves. If you're taught you can’t do anything, you
            won’t do anything. I was taught I could do everything.
            </p>
          </div>
          {/*footer*/}
          <div className="flex flex-col items-center justify-end p-6 border-t border-solid
          lg:flex-row">
            <button
              type="button"
              className="text-white bg-red-500 active:bg-green-600 font-bold
            uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg
            outline-none focus:outline-none mx-2 my-2"
              onClick={() => controlModalFunc(false)}
            >
              Download PDF
            </button>

            <button
              type="button"
              className="text-white bg-blue-500 active:bg-green-600 font-bold
            uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg
            outline-none focus:outline-none mx-2 my-2"
              onClick={() => controlModalFunc(false)}
            >
              Add to List
            </button>

            <button
            type="button"
            className="text-white bg-green-500 active:bg-green-600 font-bold
            uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg
            outline-none focus:outline-none mx-2 my-2"
            onClick={() => controlModalFunc(false)}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ans
