import { Container, Star } from './styles'
import { FavoriteButton } from '../FavoriteButton'

export default function CharacterDetails({
  character: {
    id,
    name,
    status,
    image,
    species,
    gender,
    origin,
    location,
    episode: episodes
  }
}) {
  return (
    <Container>
      <img src={image} alt={name} />
      <Star>
        <h1>{name}</h1>
        <FavoriteButton characterId={id} />
      </Star>
      <hr></hr>

      <h3>
        <span>Status: </span> {status}
      </h3>
      <h3>
        <span>Species: </span> {species}
      </h3>
      <h3>
        <span>Gender: </span>
        {gender}
      </h3>
      <h3>
        <span>Origin: </span> {origin.name}
      </h3>
      <h3>
        <span>Location: </span> {location.name}
      </h3>
      <h3>
        <span>Episodes:</span> {episodes.length}
      </h3>
    </Container>
  )
}
