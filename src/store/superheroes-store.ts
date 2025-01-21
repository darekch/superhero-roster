import { create } from 'zustand';

import { Superhero, SuperheroType, SuperheroUniverse } from '@/types';

interface SuperheroState {
  superheroes: Superhero[];
  searchQuery: string;
  filterByType: SuperheroType[];
  filterByUniverses: SuperheroUniverse[];
  //
  filteredSuperheroes: () => Superhero[];
  setSuperheroes: (data: Superhero[]) => void;
  setSearchQuery: (query: string) => void;
  setFilterByType: (type: SuperheroType) => void;
  removeFilterByType: (type: SuperheroType) => void;
  setFilterByUniverses: (universe: SuperheroUniverse) => void;
  removeFilterByUniverse: (universe: SuperheroUniverse) => void;
}

const useSuperheroStore = create<SuperheroState>((set, get) => ({
  searchQuery: '',
  superheroes: [],
  filterByType: [],
  filterByUniverses: [],
  //
  setSuperheroes: (data) => set({ superheroes: data }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setFilterByType: (type) =>
    set((state) => {
      if (!state.filterByType.includes(type)) {
        return { filterByType: [...state.filterByType, type] };
      }
      return state;
    }),

  removeFilterByType: (type) =>
    set((state) => {
      return { filterByType: state.filterByType.filter((t) => t !== type) };
    }),

  setFilterByUniverses: (universe) =>
    set((state) => {
      if (!state.filterByUniverses.includes(universe)) {
        return { filterByUniverses: [...state.filterByUniverses, universe] };
      }
      return state;
    }),

  removeFilterByUniverse: (universe) =>
    set((state) => {
      return {
        filterByUniverses: state.filterByUniverses.filter(
          (u) => u !== universe
        ),
      };
    }),

  filteredSuperheroes: () => {
    const { superheroes, searchQuery, filterByType, filterByUniverses } = get();

    let filtered = superheroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterByType.length > 0) {
      filtered = filtered.filter((hero) => filterByType.includes(hero.type));
    }

    if (filterByUniverses.length > 0) {
      filtered = filtered.filter((hero) =>
        filterByUniverses.includes(hero.universe)
      );
    }

    return filtered;
  },
}));

export { useSuperheroStore };
