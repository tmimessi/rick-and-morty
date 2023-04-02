import React from 'react'
import { render, screen } from '@testing-library/react'
import Character from './index'

describe('Character', () => {
  const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  it('should render character name', () => {
    render(<Character character={mockCharacter} />)
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument()
  })

  it('should render character image', () => {
    render(<Character character={mockCharacter} />)
    const img = screen.getByAltText(mockCharacter.name)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', mockCharacter.image)
  })

  it('should render favorite button untoggled', () => {
    render(<Character character={mockCharacter} />)
    const favoriteButton = screen.getByTestId('favorite-button-off');
    expect(favoriteButton).toBeInTheDocument();
  })
})
