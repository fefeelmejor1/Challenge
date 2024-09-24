// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch


//const apiKey = 'b7d4916d0799dfce932437fe9f242f2c';
//const Url = 'https://api.themoviedb.org/3/search/movie';

export async function searchMovies(title) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b7d4916d0799dfce932437fe9f242f2c&language=en-US&query=${encodeURIComponent(title)}&page=1&include_adult=false`);
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json= await response.json();
        console.log(json)
        return json;
    } catch (error) {
        console.error(error.message);
    }
}


