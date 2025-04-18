import React from 'react'

const Ready = () => {
  return (
    <div>
      <div className="text-white flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mt-8">We Are ready to help</h1>
        <p className="text-gray-400 h-20 w-150 text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          recusandae quis ad, fugiat voluptates vero itaque distinctio doloribus
          facere odit sint.
        </p>
        <img 
         src="/Image/office.jpg"
         alt="pic"
         className="h-100 w-170 my-8 rounded-xl"
          />
      </div>
    </div>
  )
}

export default Ready
