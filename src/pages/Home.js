import React, { useState, useEffect } from "react";
import Test from '../assets/aargh.jpg';
import '../css/home.css';
import 'firebase/database';
import { db } from '../firebase';
import { getDocs, collection } from "firebase/firestore";




function Home() {
    const [movieList, setMovieList] = useState([]);

    const moviesCollectionRef = collection(db, "movie");
  
    useEffect(() => {
      const getMovieList = async() => {
        try{
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}));
        setMovieList(filteredData);
        } catch(err) {
          console.error(err);
        }
      };
  
      getMovieList();
    }, []);
  
    const Alert = () => {
      useEffect(() => {
        alert('Crash detected!');
      }, []);
    
      return null;
    };

    return(
        <div>
        <div className="bg-gradient-to-r from-gray-700 to-black md:h-[400px] h-300px rounded-b-custom flex w-full max-w-md">
        <img src={Test} class="rounded-custom2 ml-4 md:ml-[25px] pt-[25px] mb-[40px] w-1/2 md:h-[350px] h-[300px] shrink" alt="Image"></img>
        <div className=" md:ml-10 ml-4 md:mt-[80px] mt-14">
        <h1 className="text-gray-500">Battery</h1>
        <div className="md:w-64 w-30 h-6 bg-gray-600 rounded-lg overflow-hidden mt-2">
            <progress className="w-full max-w-md h-full bg-white" value="30" max="100"></progress>
        </div>
        <h2 className="text-white mt-8 text-2xl md:text-4xl">Sharooq's</h2>
        <h2 className="text-white mt-2 text-2xl md:text-4xl">Helmet</h2>
        <p className="text-white mt-4">VanMoof S3</p>
        <p className="text-gray-500">536.8 km</p>
        </div>
        </div>
        <div className="mt-6 ml-8 flex font-bold">
            <p className="text-white mr-3">Click to enable theft mode</p>
        {/* <input id="checkboxInput" type="checkbox"/>
    <label class="toggleSwitch" for="checkboxInput">
    </label> */}
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4 h-1/2">
        <div className="border-[2px] rounded-custom3 border-gray-800 h-[200px] text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16" className="ml-12 mt-10">
  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
</svg>
<p className="font-bold text-lg mt-4 ml-11">help me</p>
        </div>
        <div className="border-[2px] rounded-custom3 border-gray-800 h-[200px] text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16" className="ml-[55px] mt-10">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
<p className="font-bold text-lg mt-7 ml-[52px]">settings</p>
        </div>
    </div>
    <div>
        {movieList.map((movies) => (
           <div key={movies.id}>
           <h1>{movies.title}</h1>
           {movies.crash === true && <Alert />} {/* Add this line */}
         </div>
        ))}
      </div>
      </div>
    );
}

export default Home;