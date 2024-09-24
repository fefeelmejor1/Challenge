import React from 'react';
import { MovieList } from '../ui/MoviesList';
import { SearchMovies } from '../ui/SearchMovies';
import { WatchList } from '../ui/WatchList';


export default function Home () {
    return (
        <>
        <div class="bg-gray-70">
        <h1 class="text-3xl font-bold mt-10 px-10 ">Películas para mirar</h1>
        </div>
        <div class="bg-gray-70 h-screen  flex ">
            
            <div class="self-start ml-10 " >
                <SearchMovies></SearchMovies>
                <MovieList></MovieList>
            </div>
            <div class="self-start ml-28">
                <WatchList></WatchList>
            </div>
        </div>
        </>
    )
}