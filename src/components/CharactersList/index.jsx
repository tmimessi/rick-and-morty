import Character from '../Character'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function CharactersList({ characters, handlePagination }) {
  return (
    <InfiniteScroll
      dataLength={characters.length}
      next={handlePagination}
      hasMore={true}
      loader={<h4>Loading ...</h4>}
    >
      <Container>
        {characters.map((character, index) => (
          <Link to={`/details/${character.id}`} key={index}>
            <Character character={character} />
          </Link>
        ))}
      </Container>
    </InfiniteScroll>
  )
}
