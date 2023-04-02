import { createContext, useContext, useState } from 'react'

const FavoriteContext = createContext({
  favorites: [],
  toggleFavorite: () => {}
})

export function useFavorite() {
  return useContext(FavoriteContext)
}

export function FavoriteProvider({ children }) {
  const [favorites, setFavorite] = useState([])

  const toggleFavorite = characterId => {
    const newFavorites = favorites.includes(characterId)
      ? favorites.filter(item => item !== characterId)
      : [...favorites, characterId]
    setFavorite(newFavorites)
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}
