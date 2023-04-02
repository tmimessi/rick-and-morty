import SearchInput from '../../components/SearchInput'
import { Container } from './styles'
import CharactersList from '../../components/CharactersList'
import { Header } from '../../components/Header'
import { Divider } from '../../components/Divider'
import { FiSearch } from 'react-icons/fi'
import React, { useState, useEffect } from 'react'

export function Home() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      )
      const { results } = await response.json()
      if (results) {
        let newCharacters = characters.concat(results)
        setCharacters(newCharacters)
      }
    }
    fetchData()
  }, [page, search])

  useEffect(() => {
    handleSearch()
  }, [search])

  async function handleSearch() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${search}`
    )
    const { results } = await response.json()
    if (results) {
      setCharacters(results)
    }
  }

  function handleChange(event) {
    setSearch(event.target.value)
  }

  const handlePagination = () => {
    setPage(page + 1)
  }

  return (
    <Container>
      <Header />
      <SearchInput
        icon={FiSearch}
        placeholder="Type a character name. Ex.: Rick"
        value={search}
        onChange={handleChange}
      />

      <Divider title="List of characters" />

      <CharactersList
        characters={characters}
        handlePagination={handlePagination}
      />
    </Container>
  )
}

export default Home
