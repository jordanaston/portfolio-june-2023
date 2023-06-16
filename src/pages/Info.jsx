import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Info({ isDarkMode }) {
  const modeColor = isDarkMode ? 'dark-mode-color' : 'light-mode-color';
  const modeTextColor = isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color';

  return (
    <div className={`flex flex-col h-full ${modeColor}`}>
      <Header isDarkMode={isDarkMode} />

      <div className={`justify-center flex-grow overflow-scroll ${modeTextColor}`}>
        <div className="font-roboto-mono font-light px-8 pt-8 leading-[2.7] sm:w-[80%] sm:mx-auto lg:w-[55%] lg:mx-auto sm:pt-10 md:pt-20">

          <p className="font-regular text-lg">■ About</p>
          <br />
          <p>
            My background until now has been rooted in live-sound engineering and performance, 
            which is where I built my technical skills and discovered my creativity. I gained practical 
            experience and learned a lot about sound, complementing this knowledge with studies in audio 
            engineering and music production. Over time, my interest in technology has guided me towards 
            a career in software development. After dedicating some time to self-learning, I further 
            solidified my skills with a Diploma in Information Technology from Coder Academy. Today, I 
            channel my blend of experiences into building engaging and impactful web experiences. 
            <br /><br />
          </p>

          <p className="font-regular text-lg">■ Tools</p>
          <br />
          <p>  
            I'm currently coding with: <br />
            Javascript | MERN | Python | Flask | HTML | CSS | Tailwind <br /><br />
            I'm always learning and currently developing skills in: <br />
            Photoshop | Illustrator | Bootstrap <br /><br />
          </p>  

          <p className="font-regular text-lg">■ Contact</p>
          <br />
          <p> 
            If you like my work, I’d love for you to get in touch! <br /><br />
            Jordan Aston <br />
            0411 511 185 <br />
            jordanaston93@gmail.com <br />
          </p>

          <form className={`mt-12 mb-12 font-roboto-mono font-light text-lg border-${modeColor} bg-transparent outline-none`}>
            <label htmlFor="name" className="block">Name</label>
            <input id="name" name="name" type="text" required className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`} />

            <label htmlFor="email" className="block mt-4">Email</label>
            <input id="email" name="email" type="email" required className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`} />

            <label htmlFor="phone" className="block mt-4">Phone</label>
            <input id="phone" name="phone" type="tel" required className={`mt-3 block w-full sm:w-3/5 h-8 pl-2 border border-${modeColor} bg-transparent outline-none`} />

            <label htmlFor="message" className="block mt-4">Message</label>
            <textarea id="message" name="message" required className={`mt-3 block w-full sm:w-3/5 h-32 pl-2 border border-${modeColor} bg-transparent outline-none`} />

            <button type="submit" className={`mt-6 px-4 py-2 bg-none border border-${modeColor} text-${modeColor} rounded`}>Submit</button>
          </form>

        </div>
      </div>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}

export default Info;

