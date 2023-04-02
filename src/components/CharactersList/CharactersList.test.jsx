import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CharactersList from './index'

describe('CharactersList', () => {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      origin: {
        name: 'Earth'
      },
      location: {
        name: 'Earth'
      },
      episode: ['https://rickandmortyapi.com/api/episode/1']
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      origin: {
        name: 'Earth'
      },
      location: {
        name: 'Earth'
      },
      episode: ['https://rickandmortyapi.com/api/episode/1']
    }
  ]

  it('should render a list of characters', () => {
    render(
      <BrowserRouter>
        <CharactersList characters={characters} />
      </BrowserRouter>
    )

    const characterLinks = screen.getAllByRole('link')

    expect(characterLinks.length).toBe(2)
  })

  it('should call handlePagination when scrolled to the bottom', () => {
    const handlePaginationMock = jest.fn()

    render(
      <BrowserRouter>
        <CharactersList
          characters={characters}
          handlePagination={handlePaginationMock}
        />
      </BrowserRouter>
    )

    const loader = screen.getByText('Loading ...')

    expect(loader).toBeInTheDocument()

    Object.defineProperty(window, 'innerHeight', { value: 500 })
    window.scrollTop = 1000
    fireEvent.scroll(window)

    expect(handlePaginationMock).toHaveBeenCalled()
  })
})
