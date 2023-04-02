import CharacterDetails from '../../components/CharacterDetails'
import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      )
      const data = await response.json()
      setData(data)
    }
    fetchCharacter()
  }, [])

  if (data === null) {
    return false
  }

  return <CharacterDetails character={data} />
}

export default Details
