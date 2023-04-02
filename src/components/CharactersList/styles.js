import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 50px;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
