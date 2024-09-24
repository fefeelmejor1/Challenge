import { WatchList } from "../ui/WatchList";

const { createContext, useReducer } = require("react")

export const MoviesContext = createContext(null);
export const MoviesDispatchContext = createContext(null);

const initialState = {
  movies: [],  // Lista de resultados de búsqueda
  movies2: [], // Lista de seguimiento (inicialmente un array vacío)
};

function moviesReducer(state, action) {
  switch (action.type) {
    case 'setMovies': {
      return {
        ...state,
        movies: action.movies,
      };
    }
    case 'setWatch': {
      return {
        ...state,
        movies2: [...state.movies2, action.movie], // Asegúrate de que siempre sea un array
      };
    }
    case'movieInWatch':{
      return{
        ...state,
        movies2:(state.movies2 || [])
      };
    }
    case 'clearWatch':{
      return{
        ...state,
        movies2: state.movies2.filter(movie => movie.id !== action.movie.id),
      };
    }
    case 'clear': {
      return {
        ...state,
        movies: [],
      };
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
}

export default function MoviesContextProvider({ children }) {
  const [state, dispatch] = useReducer(moviesReducer, initialState); // Asegúrate de pasar el estado inicial
  return (
    <MoviesContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}