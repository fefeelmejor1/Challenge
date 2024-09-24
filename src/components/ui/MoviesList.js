import React, { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext";

export function MovieList() {
  const {movies, movies2} = useContext(MoviesContext) ;
  const dispatch = useContext(MoviesDispatchContext);

  const handleSetWatch = (movie) => {
    if (movies2 && movies2.includes(movie)){
        dispatch({
            type: "clearWatch",
            movie,
          });
    }else{
        dispatch({
            type: "setWatch",
            movie,
          });
    }

  };
  if (!movies){
    return<></>;
  };
  return (
    <div class="mt-10 ">
      {movies.length === 0 ? (
        <p>No hay películas en la lista.</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li
              key={movie.id}
              class="movie-item flex items-center mb-4 p-4 border border-gray-300 rounded"
            >
              <img class="w-20 h-20 object-cover border-2" src={movie.poster_path}></img>
                <div class="grow ml-5">
                    <h2 class="font-semibold">{movie.title}</h2>
                    <p class="justify-content-center mt-2">
                        Año: {movie.release_date.split("-")[0]}
                    </p>
                    <p class="text-sm  mr-4">
                        puntaje: {movie.vote_average.toFixed(1)} / popularidad:{" "}
                        {movie.popularity}
                    </p>
                </div>
                <div >
                    <button
                        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition "
                        onClick={() => handleSetWatch(movie)}>
                        {movies2 && movies2.includes(movie)
                        ? 'Quitar de mi lista'
                        : 'Agregar a mi lista'
                        }
                    </button>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
