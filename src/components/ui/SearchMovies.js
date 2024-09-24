import React, { useState, useContext } from 'react';
import { MoviesDispatchContext } from '../contexts/MoviesContext';
import { searchMovies } from '../../services/movies';

export function SearchMovies() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const dispatch = useContext(MoviesDispatchContext);

    const handleSearch = async () => {
        try {
            const data = await searchMovies(title);

            if (data.results && data.results.length > 0) {
                let filteredMovies = data.results;

                // Si hay un año ingresado, filtra por año
                if (year) {
                    filteredMovies = filteredMovies.filter(movie => {
                        const movieYear = parseInt(movie.release_date.split('-')[0], 10);
                        return movieYear < parseInt(year, 10);
                    });
                }

                // Limitar el número de resultados a 3 películas
                const limitedMovies = filteredMovies.slice(0, 3);

                dispatch({ type: 'setMovies', movies: limitedMovies });
            } else {
                alert("No se encontraron resultados.");
            }
        } catch (error) {
            console.error("Error al buscar las películas:", error);
            alert("Ocurrió un error durante la búsqueda.");
        }
    };

    return (
        <div class=" mt-10 p-2 rounded-md">
            <h1 class="text-3xl font-bold  ">Buscar </h1>

            <div className="flex space-x-4 items-end mt-5">

                <div class="flex-1">
                    <label class="block text-black font-semibold mb-2 ">Título</label>
                    <input
                        type="text"
                        placeholder="Título de la película"
                        value={title}
                     onChange={(e) => setTitle(e.target.value)}
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md"
                    />
                </div>

                <div class="flex-1">
                    <label class="block text-black font-semibold mb-2">Año hasta</label>
                    <input
                        type="number"
                        placeholder="Año"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md"
                    />
                </div>


                <button onClick={handleSearch}  class=" px-6 py-2 text-xl text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ">Buscar</button>
            </div>
        </div>
    );
}