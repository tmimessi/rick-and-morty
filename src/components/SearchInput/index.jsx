import React from 'react'
import { Container } from './styles'

export default function SearchInput({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} data-testid="search-icon" />}
      <input role="textbox" {...rest} />
    </Container>
  )
}
