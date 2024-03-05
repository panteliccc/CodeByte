import React from 'react'

function CategoryList() {
  return (
    <div className={`container flex items-center gap-5 overflow-auto`}>
      <div className={`text-white bg-black text-lg px-3 py-2 rounded-md`}>
        Computer
      </div>
      <div className={`text-white bg-black text-lg px-3 py-2 rounded-md`}>
      Programming
      </div>
      <div className={`text-white bg-black text-lg px-3 py-2 rounded-md`}>
      News
      </div>
      <div className={`text-white bg-black text-lg px-2 py-2 rounded-md`}>
        BackEnd
      </div>
      <div className={`text-white bg-black text-lg px-2 py-2 rounded-md`}>
        FrontEnd
      </div>
    </div>
  )
}

export default CategoryList
