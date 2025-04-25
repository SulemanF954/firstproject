import React from "react";

const Ready = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-white flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
          We Are Ready to Help
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          recusandae quis ad, fugiat voluptates vero itaque distinctio doloribus
          facere odit sint.
        </p>

        <img
          src="/Image/office.jpg"
          alt="office"
          className="w-full max-w-4xl h-auto mt-8 rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Ready;

