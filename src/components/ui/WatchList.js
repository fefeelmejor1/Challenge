import React, { useContext } from 'react';
import { MoviesContext, MoviesDispatchContext } from '../contexts/MoviesContext';

export function WatchList() {
    const  {movies2}  = useContext(MoviesContext); // Desestructuramos movies2 directamente
    const dispatch = useContext(MoviesDispatchContext);

    const handleClear =(movie)=>{
        dispatch({
            type: 'clearWatch',
            movie,   
        })
    }
    if(!movies2){
        return<></>;
    };
    return (
        <div class="mt-10 p-2 rounded-md">
            <h2 class="text-2xl font-bold mb-4">Mi Lista :</h2>
            {movies2.length === 0 ? (
                <p>No tienes películas en tu lista.</p>
            ) : (
                <ul class="space-y-4">
                    {movies2.map((movie) => (
                        <li key={movie.id} class="flex jusfity-between items-center p4 rounded shadow-md">
                           <span class="font-semibold text-xl ml-3">{movie.title} </span> 
                            <div class="ml-auto">
                                <button onClick={()=>handleClear(movie)} class="hover:text-red-700 text-3xl font-medium ml-20">❌</button>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}  
        </div>
    );
}