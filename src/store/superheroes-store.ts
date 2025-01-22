import { create } from 'zustand';
import { Superhero, SuperheroType, SuperheroUniverse } from '@/types';

interface SuperheroState {
  superheroes: Superhero[];
  searchQuery: string;
  filterByType: SuperheroType[];
  filterByUniverse: SuperheroUniverse[];
}

interface SuperheroActions {
  getFilteredSuperheroes: () => Superhero[];
  setSuperheroes: (data: Superhero[]) => void;
  setSearchQuery: (query: string) => void;
  setFilterByType: (type: SuperheroType) => void;
  removeFilterByType: (type: SuperheroType) => void;
  setfilterByUniverse: (universe: SuperheroUniverse) => void;
  removeFilterByUniverse: (universe: SuperheroUniverse) => void;
}

const useSuperheroStore = create<SuperheroState & SuperheroActions>(
  (set, get) => {
    const state: SuperheroState = {
      searchQuery: '',
      superheroes: [],
      filterByType: [],
      filterByUniverse: [],
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

      setfilterByUniverse: (universe) => {
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

      getFilteredSuperheroes: () => {
        const { superheroes, searchQuery, filterByType, filterByUniverse } =
          get();

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

        return filtered;
      },
    };

    return { ...state, ...actions };
  }
);

export { useSuperheroStore };
