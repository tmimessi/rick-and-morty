import { Container } from './styles'

export function Divider({title}) {
  return (
    <Container>
      <h1>{title}</h1>
      <div />
    </Container>
  )
}