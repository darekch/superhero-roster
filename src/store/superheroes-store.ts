import { create } from 'zustand';
import { Superhero, SuperheroType, SuperheroUniverse } from '@/types';

interface SuperheroState {
  superheroes: Superhero[];
  searchQuery: string;
  filterByType: SuperheroType[];
  filterByUniverse: SuperheroUniverse[];
  filterByFavourite: boolean;
  favouriteSuperheroesIds: string[];
}

interface SuperheroActions {
  getFilteredSuperheroes: () => Superhero[];
  setSuperheroes: (data: Superhero[]) => void;
  setSearchQuery: (query: string) => void;
  setFilterByFavourite: () => void;
  setFilterByType: (type: SuperheroType) => void;
  removeFilterByType: (type: SuperheroType) => void;
  setFilterByUniverse: (universe: SuperheroUniverse) => void;
  removeFilterByUniverse: (universe: SuperheroUniverse) => void;
  addFavouriteSuperheroId: (id: string) => void;
  removeFavouriteSuperheroId: (id: string) => void;
}

const useSuperheroStore = create<SuperheroState & SuperheroActions>(
  (set, get) => {
    const state: SuperheroState = {
      searchQuery: '',
      superheroes: [],
      filterByType: [],
      filterByUniverse: [],
      filterByFavourite: false,
      favouriteSuperheroesIds: [],
    };

    const actions: SuperheroActions = {
      setSuperheroes: (data) => {
        return set({ superheroes: data });
      },

      setSearchQuery: (query) => {
        return set({ searchQuery: query });
      },

      setFilterByType: (type) => {
        return set((state) => ({
          filterByType: state.filterByType.includes(type)
            ? state.filterByType
            : [...state.filterByType, type],
        }));
      },

      removeFilterByType: (type) => {
        return set((state) => ({
          filterByType: state.filterByType.filter((t) => t !== type),
        }));
      },

      setFilterByUniverse: (universe) => {
        return set((state) => ({
          filterByUniverse: state.filterByUniverse.includes(universe)
            ? state.filterByUniverse
            : [...state.filterByUniverse, universe],
        }));
      },

      removeFilterByUniverse: (universe) => {
        return set((state) => ({
          filterByUniverse: state.filterByUniverse.filter(
            (u) => u !== universe
          ),
        }));
      },

      addFavouriteSuperheroId: (id) => {
        return set((state) => ({
          favouriteSuperheroesIds: state.favouriteSuperheroesIds.includes(id)
            ? state.favouriteSuperheroesIds
            : [...state.favouriteSuperheroesIds, id],
        }));
      },

      removeFavouriteSuperheroId: (id) => {
        return set((state) => ({
          favouriteSuperheroesIds: state.favouriteSuperheroesIds.filter(
            (superheroId) => superheroId !== id
          ),
        }));
      },

      setFilterByFavourite: () => {
        set((state) => ({ filterByFavourite: !state.filterByFavourite }));
      },

      getFilteredSuperheroes: () => {
        const {
          superheroes,
          searchQuery,
          filterByType,
          filterByUniverse,
          filterByFavourite,
          favouriteSuperheroesIds,
        } = get();

        let filtered = superheroes.filter((hero) =>
          hero.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filterByType.length > 0) {
          filtered = filtered.filter((hero) =>
            filterByType.includes(hero.type)
          );
        }

        if (filterByUniverse.length > 0) {
          filtered = filtered.filter((hero) =>
            filterByUniverse.includes(hero.universe)
          );
        }

        if (filterByFavourite) {
          filtered = filtered.filter((hero) =>
            favouriteSuperheroesIds.includes(hero.id)
          );
        }

        return filtered;
      },
    };

    return { ...state, ...actions };
  }
);

export { useSuperheroStore };
