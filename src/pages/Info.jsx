import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Resume from "../assets/Jordan Aston - Resume.pdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Info({ isDarkMode }) {
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again!");
        }
      );
  };

  return (
    <div className={`flex flex-col h-full ${modeColor}`}>
      <Header isDarkMode={isDarkMode} />

      <div
        className={`justify-center flex-grow overflow-scroll text-${modeColor}`}
      >
        <div className="font-roboto-mono font-light px-8 pt-8 leading-[1.8] sm:w-[80%] sm:mx-auto lg:w-[55%] lg:mx-auto sm:pt-10 md:pt-20">
          <p className="font-regular text-lg">💻 About</p>
          <br />
          <p>
            Keen software developer proficient in developing dynamic web and
            mobile applications throughout all stages of the project lifecycle.
            Comprehensive knowledge of modern development tools and languages,
            coupled with the ability to write clean, efficient, and maintainable
            code.
            <br />
            <br />
            Strong aptitude for embracing new technologies and an inherent knack
            for problem-solving. Ability to collaborate within a team
            environment and contribute to a culture of shared ideas and
            constructive feedback.
            <br />
            <br />
            <br />
            <br />
          </p>

          <p className="font-regular text-lg">🛠 Tools</p>
          <br />
          <p>
            Currently coding with: <br />
            <br />
            React | React Native | Typescript | Javascript Tailwind CSS | Chakra
            | Figma MongoDB | Express.js | Koa | Node.js Python | Flask | SQL |
            PostgreSQL VS Code | Git | Postman
            <br />
            <br />
            <br />
            <br />
          </p>

          <p className="font-regular text-lg">📞 Contact</p>
          <br />
          <p>
            If you like my work, I’d love for you to get in touch! <br />
            <br />
            Jordan Aston <br />
            0411 511 185 <br />
            jordanaston93@gmail.com <br />
          </p>
          <br />
          <a href={Resume} download>
            Download My Resume ↓
          </a>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={`mt-12 mb-12 font-roboto-mono font-light text-lg border-${modeColor} bg-transparent outline-none`}
          >
            <label htmlFor="from_name" className="block">
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`}
            />

            <label htmlFor="from_email" className="block mt-4">
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`}
            />

            <label htmlFor="phone" className="block mt-4">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`}
            />

            <label htmlFor="message" className="block mt-4">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={`mt-3 block w-full sm:w-3/5 h-32 pl-2 border border-${modeColor} bg-transparent outline-none`}
            />

            <button
              type="submit"
              value="Send"
              className={`mt-6 px-4 py-2 bg-none border border-${modeColor} text-${modeColor} rounded`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Info;

// My background until now has been rooted in live-sound engineering
// and performance, which is where I built my technical skills and
// discovered my creativity. I gained practical experience and learned
// a lot about sound, complementing this knowledge with studies in
// audio engineering and music production.

// Over time, my interest in technology has guided me towards a career
// in software development. After dedicating some time to
// self-learning, I further solidified my skills with a Diploma in
// Information Technology from Coder Academy. Today, I channel my blend
// of experiences into building engaging and impactful web experiences.

// Typescript | Javascript | React | React Native | React Query |
// Zustand | HTML | CSS | MongoDB | Express.js | Node.js | Next.js |
// Python | Flask | SQL | PostgreSQL | JSON | Tailwind CSS | Formik &
// Yup | Axios | Figma | Adobe XD | VS Code | Git | Postman | Flipper |
// DBeaver | XCode
