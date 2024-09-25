import { FaEnvelope, FaPhone } from "react-icons/fa";

function ContactsSections() {
  return (
    <section id="contacts" className="w-full py-20   text-white text-center">
      <h2 className="text-5xl font-extrabold mb-12 animate-pulse">
        Contact Me
      </h2>
      <p className="text-lg mb-8">Reach out to me via:</p>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-4 text-2xl">
          <FaEnvelope className="text-violet-300 animate-bounce" />
          <span className="font-semibold">Email: </span>
          <span className="text-violet-300 hover:underline">
            matasgg6@gmail.com
          </span>
        </div>
        <div className="flex items-center space-x-4 text-2xl">
          <FaPhone className="text-violet-300 animate-bounce" />
          <span className="font-semibold">Phone: </span>
          <span className="text-violet-300 hover:underline">+37061654413</span>
        </div>
      </div>
    </section>
  );
}

export default ContactsSections;
