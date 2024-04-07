import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import { db } from './firebase';
import { getDocs, collection } from "firebase/firestore";

function App() {
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
  


    return (
    <>
      <Home />
      <div>
        {movieList.map((movies) => (
           <div key={movies.id}>
           <h1>{movies.title}</h1>
           {movies.crash === true && <Alert />} {/* Add this line */}
         </div>
        ))}
      </div>
    </>
    );
  }
  
  export default App;