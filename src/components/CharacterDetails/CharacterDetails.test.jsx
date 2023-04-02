import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import CharacterDetails from './index'

const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  species: 'Human',
  gender: 'Male',
  origin: { name: 'Earth (C-137)' },
  location: { name: 'Earth (Replacement Dimension)' },
  episode: [
    { name: 'Pilot' },
    { name: 'Lawnmower Dog' },
    { name: 'Anatomy Park' }
  ]
}

describe('CharacterDetails component', () => {
  it('should render character details', () => {
    render(<CharacterDetails character={character} />)

    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByText('Alive')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Earth (C-137)')).toBeInTheDocument()
    expect(
      screen.getByText('Earth (Replacement Dimension)')
    ).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('should render favorite button', () => {
    render(<CharacterDetails character={character} />)
    const favoriteButton = screen.getByTestId('favorite-button-off')
    expect(favoriteButton).toBeInTheDocument()
  })
})
