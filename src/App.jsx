// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Technologies from "./components/Technologies"
// import Projects from "./components/projects"
// import Experience from "./components/Experience"
// import Certificate from "./components/Certificate"
// import Contact from "./components/Contact"

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-stone-300 antialiased">
//       <div className="fixed inset-0 -z-10">
//       <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
//       </div>


//       <div className="container mx-auto px-8">
//         <Navbar />
//         <Hero />
//         <Technologies />
//         <Experience />
//         <Projects />
//         <Certificate />
//         <Contact />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  // Effect to toggle the class on the document body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`overflow-x-hidden antialiased ${darkMode ? 'text-stone-100' : 'text-stone-300'}`}>
      <div className="fixed inset-0 -z-10">
        <div className={`relative h-full w-full ${darkMode ? 'bg-gray-900' : 'bg-black'}`}>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        {/* Passing the toggleDarkMode function to Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <Certificate />
        <Contact />
      </div>
    </div>
  );
};

export default App;
