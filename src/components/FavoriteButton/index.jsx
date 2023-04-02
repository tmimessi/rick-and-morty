import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Container } from './styles'
import { useFavorite } from '../../hooks/FavoriteContext'

export function FavoriteButton({ characterId }) {
  const { favorites, toggleFavorite } = useFavorite()

  const handleToggleFavorite = e => {
    e.preventDefault()
    toggleFavorite(characterId)
  }

  const isFavorite = favorites.includes(characterId)

  return (
    <Container>
      {isFavorite ? (
        <AiFillStar
          onClick={handleToggleFavorite}
          data-testid="favorite-button-on"
        />
      ) : (
        <AiOutlineStar
          onClick={handleToggleFavorite}
          data-testid="favorite-button-off"
        />
      )}
    </Container>
  )
}
