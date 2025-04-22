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
      <div className="grid grid-cols-6 gap-4 m-7">
        <div className="col-span-4 h-120 bg-gray-900 p-8">
          <h1 className="text-gray-100 font-bold font-sans text-2xl">
            Need Help? Open a Ticket
          </h1>
          <p className="text-gray-500 font-sans mt-1">
            Our Support Team Will Get Back To You ASAP Via Email
          </p>

          <div className="grid grid-cols-6 gap-2 mt-8">
            <div className="flex flex-col col-span-3">
              <span className="font-sans font-bold text-gray-100">
                Your Name
              </span>
              <input
                className="text-gray-100 p-2 bg-gray-800 rounded-none mt-1.5"
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col col-span-3">
              <span className="font-sans font-bold text-gray-100">
                Your Email
              </span>
              <input
                className="text-gray-100 p-2 bg-gray-800 rounded-none mt-1.5"
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-6 mt-8">
            <div className="flex flex-col col-span-6">
              <label
                htmlFor="message"
                className="font-sans font-bold block mb-2 text-gray-100 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="font-sans font-medium block p-2.5 w-full text-gray-400 bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-semibold font-sans mt-2 px-5 py-2.5 me-2 mb-2"
          >
            Submit Ticket
          </button>
        </div>

        <div className="flex flex-col col-span-2 bg-gray-900 p-5">
          <h1 className="text-gray-100 font-bold font-sans text-2xl">
            Subscrible To Receive Future Update
          </h1>
          <p className="text-gray-500 font-sans mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus
            pariatur assumenda laborum, quam error possimus aliquid?
          </p>
          <hr className="mt-5 mb-5 text-gray-400" />
          <input
            className="w-full h-10 mt-4 px-2 py-4 bg-gray-700 text-gray-300"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full h-10 mt-4 px-2 py-4 bg-gray-700 text-gray-300"
            type="text"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-semibold font-sans mt-4 px-5 py-2.5 mb-2"
          >
            Submit Ticket
          </button>
          <span className="text-gray-500 text-bold text-center mt-2">
            No Spam guaranteed,So Please don't Send Any Spam Mail
          </span>
        </div>
      </div>
    </form>
  );
};

export default ContactCard;
