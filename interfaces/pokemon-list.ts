export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}

export interface PokemonName {
    name: string;
    url:  string;
}
