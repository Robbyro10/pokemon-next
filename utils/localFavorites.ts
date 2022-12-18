
const toggleFavorite = ( id: number ) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if ( favorites.includes(id) ) {
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existsInFavorites = ( id: number ): boolean => {
    //if its being generated from the server, return false
    if ( typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorite,
    existsInFavorites,
    pokemons,
}