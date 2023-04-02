import { Container, Star } from './styles'
import { FavoriteButton } from '../FavoriteButton'

export default function Character({ character: { id, name, image } }) {
  return (
    <Container>
      <img src={image} alt={name} />
      <Star>
        <h2>{name}</h2>
        <FavoriteButton characterId={id} />
      </Star>
    </Container>
  )
}
