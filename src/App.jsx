import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ImageCard from './components/ImageCard'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    console.log("light theme");
    setThemeMode("light");
  }

  const darkTheme = () => {
    console.log("dark theme");
    setThemeMode("dark");
  }

  useEffect(() => {
    console.log("theme mode", themeMode);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(themeMode);
    
  }, [themeMode])

  return (
        <ThemeProvider
          value={{themeMode, lightTheme, darkTheme}}
          
        ><header className="flex justify-between items-center p-5 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Astronomy Highlights</h1>
        <ThemeToggle/>
      </header>
          {/* Navbar */}
          <nav className="w-full bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Astronomy Insights</h1>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    
        {/* Introduction Section */}
<section className="w-full bg-gray-50 dark:bg-gray-900 py-10 px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
      Welcome to Astronomy Insights
    </h2>
    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
      Embark on a journey through the vast expanse of the cosmos. Here, we explore 
      the wonders of stars, planets, galaxies, and the mysteries that lie beyond the reach 
      of human imagination. Whether you're a casual stargazer or a dedicated astronomer, 
      our goal is to bring the universe closer to you, one story at a time.
    </p>
  </div>
  
  {/* Astronomy SVG Illustration */}
<div className="mt-8 flex justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-48 h-48 text-gray-800 dark:text-gray-200"
  >
    {/* Central Sun/Planet */}
    <circle
      cx="32"
      cy="32"
      r="8"
      className="fill-current text-yellow-500 dark:text-yellow-300"
    />
    {/* Orbital Paths */}
    <circle
      cx="32"
      cy="32"
      r="15"
      className="stroke-current text-gray-500 dark:text-gray-400"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="32"
      cy="32"
      r="22"
      className="stroke-current text-gray-400 dark:text-gray-500"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="32"
      cy="32"
      r="28"
      className="stroke-current text-gray-300 dark:text-gray-600"
      strokeWidth="0.5"
      fill="none"
    />
    {/* Orbiting Planets */}
    <circle
      cx="47"
      cy="32"
      r="2"
      className="fill-current text-blue-500 dark:text-blue-300"
    />
    <circle
      cx="32"
      cy="54"
      r="2"
      className="fill-current text-red-500 dark:text-red-300"
    />
    <circle
      cx="20"
      cy="32"
      r="2"
      className="fill-current text-green-500 dark:text-green-300"
    />
  </svg>
</div>

</section>


    
          {/* Main Content */}
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all duration-300 p-4 pb-10">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Astronomy Highlights
            </h1>
    
            <div className="w-full  mx-auto ">
              <ImageCard />
            </div>
    
            {/* Additional Random Content */}
            <div className="mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl text-center">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Did You Know?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                The observable universe is estimated to contain over 100 billion galaxies, each with billions of stars. 
                Some of these stars may have planets capable of supporting life!
              </p>
            </div>
    
            <div className="mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl text-center">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Featured Topic: Black Holes
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Black holes form when massive stars collapse under their own gravity. 
                Their gravitational pull is so strong that not even light can escape their grasp.
              </p>
            </div>
          </div>
    
          {/* Footer */}
          {/* Footer */}
<footer className="w-full bg-gray-200 dark:bg-gray-800 py-4 mt-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-700 dark:text-gray-300 mb-2 md:mb-0">
      &copy; {new Date().getFullYear()} Astronomy Insights. All rights reserved.
    </p>
    <p className="text-gray-700 dark:text-gray-300 mb-2 md:mb-0">
      Created with ❤️ by Skand
    </p>
    <ul className="flex space-x-4">
      <li>
        <a
          href="https://www.isro.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          ISRO
        </a>
      </li>
      <li>
        <a
          href="https://www.nasa.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          NASA
        </a>
      </li>
      <li>
        <a
          href="https://www.esa.int"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          ESA
        </a>
      </li>
      <li>
        <a
          href="https://www.jaxa.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          JAXA
        </a>
      </li>
      <li>
        <a
          href="https://www.cnsa.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          CNSA
        </a>
      </li>
    </ul>
  </div>
</footer>

        </ThemeProvider>
      );
    };
   
  


export default App
