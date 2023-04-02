import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FavoriteButton } from './index'

describe('FavoriteButton', () => {
  it('should render correctly', () => {
    render(<FavoriteButton characterId={1} />)

    expect(screen.getByTestId('favorite-button-off')).toBeInTheDocument()
  })

  it('should toggle favorite when clicked', async () => {
    render(<FavoriteButton characterId={1} />)

    fireEvent.click(screen.getByTestId('favorite-button-off'))
    waitFor(() => {
      const favoriteButtonOn = screen.getByTestId('favorite-button-on')
      expect(favoriteButtonOn).toBeInTheDocument()
      fireEvent.click(screen.getByTestId('favorite-button-on'))
      expect(screen.getByTestId('favorite-button-off')).toBeInTheDocument()
    })
  })
})
