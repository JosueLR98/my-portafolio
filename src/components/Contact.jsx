import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/7cfb15c8-e086-4e39-b93a-a454c90ec68b"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            className="text-center px-8 py-3 w-max text-base font-semibold rounded-md text-white bg-gradient-to-r from-yellow-500 to-blue-500 drop-shadow-md hover:stroke-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
