import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from './index'
import { AiOutlineSearch } from 'react-icons/ai'

describe('SearchInput', () => {
  it('should render the input element', () => {
    render(<SearchInput />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('should render the search icon', () => {
    render(<SearchInput icon={AiOutlineSearch} />)
    const searchIcon = screen.getByTestId('search-icon')
    expect(searchIcon).toBeInTheDocument()
  })

  it('should allow the user to type in the input field', async () => {
    const handleSearch = jest.fn()
    render(<SearchInput onChange={handleSearch} />)
    const inputElement = screen.getByRole('textbox')
    const searchText = 'Rick'
    await userEvent.type(inputElement, searchText)
    expect(handleSearch).toHaveBeenCalledTimes(searchText.length)
  })
})
