import React, { useState } from "react";

const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 m-4 lg:m-7">
        {/* Left Section (Form) */}
        <div className="lg:col-span-4 bg-gray-900 p-6 sm:p-8">
          <h1 className="text-gray-100 font-bold font-sans text-xl sm:text-2xl">
            Need Help? Open a Ticket
          </h1>
          <p className="text-gray-500 font-sans mt-1 text-sm sm:text-base">
            Our Support Team Will Get Back To You ASAP Via Email
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col">
              <label className="font-sans font-bold text-gray-100">
                Your Name
              </label>
              <input
                className="text-gray-100 p-2 bg-gray-800 rounded mt-1.5"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-sans font-bold text-gray-100">
                Your Email
              </label>
              <input
                className="text-gray-100 p-2 bg-gray-800 rounded mt-1.5"
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="font-sans font-bold block mb-2 text-gray-100"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="font-sans font-medium block p-2.5 w-full text-gray-400 bg-gray-800 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Your Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 font-semibold font-sans mt-4 px-5 py-2.5"
          >
            Submit Ticket
          </button>
        </div>

        {/* Right Section (Subscribe) */}
        <div className="lg:col-span-2 bg-gray-900 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-gray-100 font-bold font-sans text-xl sm:text-2xl">
              Subscribe To Receive Future Updates
            </h1>
            <p className="text-gray-500 font-sans mt-2 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              natus pariatur assumenda laborum, quam error possimus aliquid?
            </p>
            <hr className="mt-5 mb-5 border-gray-700" />
            <input
              className="w-full h-10 mt-2 px-3 bg-gray-700 text-gray-300 rounded"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="w-full h-10 mt-4 px-3 bg-gray-700 text-gray-300 rounded"
              type="email"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 font-semibold font-sans mt-4 px-5 py-2.5"
            >
              Submit
            </button>
          </div>
          <span className="text-gray-500 text-sm text-center mt-4">
            No Spam Guaranteed — Please Don’t Send Any Spam Mail
          </span>
        </div>
      </div>
    </form>
  );
};

export default ContactCard;
